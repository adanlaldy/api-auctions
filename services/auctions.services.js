import dotenv from 'dotenv'
import { PrismaClient } from '../generated/prisma/index.js';

dotenv.config()
const prisma = new PrismaClient()

/**
 * Récupère toutes les enchères.
 * @returns {Promise<Array>} Liste des enchères
 */
export const getAll = async () => {
    try {
        const auctions = await prisma.auction.findMany()
        return auctions
    }
    catch (error) {
        console.error('Error fetching auctions:', error)
        throw new Error('Failed to fetch auctions')
    }
}

/**
 * Crée une nouvelle enchère.
 * @param {Object} auction - Données de l'enchère à créer
 * @returns {Promise<Object>} L'enchère créée
 */
export const create = async (auction) => {
    try {
        const tag = await prisma.tag.upsert({
            where: { name: auction.tagName },
            update: {},
            create: { name: auction.tagName },
        })

        const newAuction = await prisma.auction.create({
            data: {
                title: auction.title,
                description: auction.description,
                file: {
                    connect: { id: auction.fileId }
                },
                initialPrice: Number(auction.initialPrice),
                actualBidPrice: Number(auction.initialPrice),
                startBidDate: new Date(auction.startBidDate),
                endBidDate: auction.endBidDate ? new Date(auction.endBidDate) : null,
                // sellerId: auction.sellerId,
                seller: { connect: { id: auction.sellerId } },
                // buyerId: auction.buyerId ?? null,
                buyer: auction.buyerId ? { connect: { id: auction.buyerId } } : undefined,
                // stateId: auction.stateId ?? null,
                // tagId: tag.id,
                state: {
                    connect: { id: 3 }, // 3 est l'ID de l'état "Pending"
                },
                tag: {
                    connect: { id: tag.id }
                },
            }
        }
        )


        return newAuction
    } catch (error) {
        console.error('Error creating auction:', error)
        throw new Error('Failed to create auction')
    }
}

/**
 * Récupère une enchère par son ID.
 * @param {number} id - ID de l'enchère
 * @returns {Promise<Object|null>} L'enchère ou null si non trouvée
 */
export const getById = async (id) => {
    try {
        const auction = await prisma.auction.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!auction) {
            return null;
        }

        return auction;
    } catch (error) {
        console.error('Error fetching auction:', error);
        throw new Error('Failed to fetch auction');
    }
}

/**
 * Supprime une enchère par son ID.
 * @param {number} id - ID de l'enchère
 */
export const deleteById = async (id) => {
    try {
        await prisma.auction.delete({
            where: {
                id: parseInt(id),
            },
        });
    } catch (error) {
        console.error('Error deleting auction:', error);
        throw new Error('Failed to delete auction');
    }
}

/**
 * Met à jour une enchère par son ID.
 * @param {number} id - ID de l'enchère
 * @param {Object} auction - Données à mettre à jour
 */

export const updateById = async (id, auction) => {
    try {
        const updated = await prisma.auction.update({
            where: { id: parseInt(id) },
            data: auction,
        })
        return updated  // important de retourner la mise à jour
    } catch (error) {
        console.error('Error updating auction:', error)
        throw new Error('Failed to update auction')
    }
}