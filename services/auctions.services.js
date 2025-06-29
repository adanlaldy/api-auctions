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
        // Trouver l'id du state "Pending"
        const pendingState = await prisma.state.findUnique({
            where: { stateType: "Pending" }
        });

        if (!pendingState) {
            throw new Error("Pending state not found");
        }

        const newAuctionData = {
            title: auction.title,
            description: auction.description,
            initialPrice: auction.initialPrice,
            startBidDate: new Date(auction.startBidDate),
            endBidDate: auction.endBidDate
                ? new Date(auction.endBidDate)
                : new Date(new Date(auction.startBidDate).getTime() + 7 * 24 * 60 * 60 * 1000),

            file: {
                create: {
                    content: "default file content",
                    contentType: "text/plain",
                },
            },

            tag: {
                create: {
                    name: "default tag",
                },
            },

            // Connexion via stateId (clé étrangère)
            state: {
                connect: {
                    id: pendingState.id,
                },
            },

            actualBidPrice: 0,

            ...(auction.buyerId && {
                buyer: {
                    connect: { id: auction.buyerId },
                },
            }),

            pictures: {
                create: [],
            },

            seller: {
                connect: { id: auction.sellerId },
            },
        };

        const newAuction = await prisma.auction.create({
            data: newAuctionData,
        });

        return newAuction;
    } catch (error) {
        console.error("Error creating auction:", error);
        throw new Error("Failed to create auction");
    }
};




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
        await prisma.auction.update({
            where: {
                id: parseInt(id),
            },
            data: auction,
        });
        console.log(auction);
    } catch (error) {
        console.error('Error updating auction:', error);
        throw new Error('Failed to update auction');
    }
}