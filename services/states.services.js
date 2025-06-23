import dotenv from 'dotenv'
import { PrismaClient } from '../generated/prisma/index.js';

dotenv.config()
const prisma = new PrismaClient()

/**
 * Récupère tous les états possibles d'enchère.
 * @returns {Promise<Array>} Liste des états
 */
export const getStates = async () => {
    try {
        const states = await prisma.state.findMany({
            orderBy: {
                stateType: 'asc'
            }
        });
        return states;
    } catch (error) {
        console.error('Error fetching states:', error);
        throw new Error('Failed to fetch states');
    }
}


export const create = async (states) => {
    try {
        // Vérifier si les états existent déjà
        const existingStates = await prisma.state.findMany({
            where: {
                stateType: {
                    in: states
                }
            }
        });

        // Filtrer les états à créer uniquement si ils n'existent pas déjà
        const existingStateTypes = existingStates.map(s => s.stateType);
        const statesToCreate = states.filter(state => !existingStateTypes.includes(state));

        // Créer uniquement les états qui n'existent pas
        if (statesToCreate.length > 0) {
            const createPromises = statesToCreate.map(state => {
                return prisma.state.create({
                    data: {
                        stateType: state
                    }
                });
            });
            await Promise.all(createPromises);
        }

        return await getStates();
    } catch (error) {
        console.error('Error creating states:', error);
        throw new Error('Failed to create states');
    }
}
