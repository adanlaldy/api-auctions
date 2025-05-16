import dotenv from 'dotenv'
import { PrismaClient } from '../generated/prisma/index.js';

dotenv.config()
const prisma = new PrismaClient()

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

export const create = async (auction) => {
    try {
        const newAuction = await prisma.auction.create({
            data: {
                title: auction.title,
                description: auction.description,
                initialPrice: auction.initialPrice,
                startBidDate: new Date(auction.startBidDate),
                endBidDate: auction.endBidDate
                    ? new Date(auction.endBidDate)
                    : new Date(new Date(auction.startBidDate).getTime() + 7 * 24 * 60 * 60 * 1000),

                file: {
                    create: {
                        content: "default file content", // à remplacer
                        contentType: "text/plain",
                    },
                },

                tag: {
                    create: {
                        name: "default tag", // à remplacer
                    },
                },

                state: {
                    connect: {
                        stateType: "pending", // ou l'id si tu préfères: id: 1
                    },
                },
                actualBidPrice: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
                buyerId: null,
                pictures: {
                    create: [],
                },
                sellerId: auction.sellerId,
            },
        });

        return newAuction
    } catch (error) {
        console.error('Error creating auction:', error)
        throw new Error('Failed to create auction')
    }
}

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