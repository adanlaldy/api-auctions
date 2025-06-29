import dotenv from 'dotenv'
import { PrismaClient } from '../generated/prisma/index.js';

dotenv.config()
const prisma = new PrismaClient()

/**
 * Récupère toutes les images.
 * @returns {Promise<Array>} Liste des images
 */
export const getPictures = async () => {
    try {
        const pictures = await prisma.picture.findMany()
        return pictures
    } catch (error) {
        console.error('Error fetching pictures:', error)
        throw new Error('Failed to fetch pictures')
    }
}

/**
 * Crée une nouvelle image pour une enchère.
 * @param {Object} params - { path, auction_id }
 * @returns {Promise<number>} ID de l'image créée
 */
export const createPicture = async ({ path, auction_id }) => {
    try {
        const picture = await prisma.picture.create({
            data: {
                path,
                auction: { connect: { id: auction_id } }
            }
        })
        return picture.id
    } catch (error) {
        throw new Error('Failed to create picture')
    }
}

/**
 * Récupère une image par son ID.
 * @param {number} id - ID de l'image
 * @returns {Promise<Object|null>} L'image ou null si non trouvée
 */
export const getById = async (id) => {
    try {
        const picture = await prisma.picture.findUnique({
            where: { id: Number(id) }
        })
        return picture
    } catch (error) {
        console.error('Error fetching picture by ID:', error)
        throw new Error('Failed to fetch picture by ID')
    }
}

/**
 * Supprime une image par son ID.
 * @param {number} id - ID de l'image
 */
export const deleteById = async (id) => {
    try {
        await prisma.picture.delete({
            where: { id: Number(id) }
        })
    } catch (error) {
        console.error('Error deleting picture by ID:', error)
        throw new Error('Failed to delete picture by ID')
    }
}

/**
 * Met à jour une image par son ID.
 * @param {number} id - ID de l'image
 * @param {Object} picture - Données à mettre à jour
 * @returns {Promise<Object>} L'image mise à jour
 */
export const updateById = async (id, picture) => {
    try {
        const updatedPicture = await prisma.picture.update({
            where: { id: Number(id) },
            data: picture
        })
        return updatedPicture
    } catch (error) {
        console.error('Error updating picture by ID:', error)
        throw new Error('Failed to update picture by ID')
    }
}


