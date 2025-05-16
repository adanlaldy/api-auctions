import { files } from './files.services.js'
import { pictures } from './pictures.services.js'

import dotenv from 'dotenv'
// import pkg from '@prisma/client';
// const { PrismaClient } = pkg;
import { PrismaClient } from '../generated/prisma/index.js';

dotenv.config()
const prisma = new PrismaClient()

// const auctions = []



export const getAll = () => {
    try {
        const auctions = prisma.auction.findMany()
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
                        content: "default file content", // ⚠️ Mettre une vraie valeur
                        contentType: "text/plain", // ou image/png, application/pdf, etc.
                    },
                },

                tag: {
                    create: {
                        name: "default tag", // ⚠️ Mettre une vraie valeur
                    },
                },

                state: {
                    create: {
                        stateType: "pending", // ⚠️ Mettre une vraie valeur
                    },
                },

                actualBidPrice: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
                buyerId: null,
                pictures: {
                    create: [], // tu peux ajouter une image par défaut si tu veux
                },
                sellerId: auction.sellerId, // ⚠️ doit être fourni
            },
        });

        return newAuction
    } catch (error) {
        console.error('Error creating auction:', error)
        throw new Error('Failed to create auction')
    }
}

// export const create = (auction) => {
//     const newAuctionId = auctions.length + 1
//     const startDate = new Date(auction.start_bid_date)
//     const endDate = auction.end_bid_date
//         ? new Date(auction.end_bid_date)
//         : new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000) // +7 jours

//     auctions.push({
//         id: newAuctionId,
//         ...auction,
//         start_bid_date: startDate,
//         end_bid_date: endDate,
//         file_id: createFile(newAuctionId),
//         actual_bid_price: null,
//         created_at: new Date(),
//         updated_at: new Date(),
//         deleted_at: null,
//         tag_id: null,
//         buyer_id: null,
//         state_id: null,
//     })

//     createPicture(auction.id)
//     return auction.id
// }

const createFile = (auctionId) => {
    const file = {
        id: files.length + 1,
        content: null,
        content_type: null,
    }
    files.push(file)
    return file.id
}

const createPicture = (auctionId) => {
    const picture = {
        id: pictures.length + 1,
        path: null,
        auctionId: auctionId,
    }
    pictures.push(picture)
}

export const getById = (id) => {
    return auctions.find((auction) => auction.id == id)
}

export const deleteById = (id) => {
    const index = auctions.findIndex((auction) => auction.id == id)
    if (index !== -1) {
        auctions.splice(index, 1)
    }
}

export const updateById = (id, auction) => {
    const index = auctions.findIndex((auction) => auction.id == id)
    if (index !== -1) {
        auctions[index] = {
            ...auctions[index],
            ...auction,
        }
    }
}