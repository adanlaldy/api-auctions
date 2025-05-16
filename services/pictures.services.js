import dotenv from 'dotenv'
import { PrismaClient } from '../generated/prisma/index.js';

dotenv.config()
const prisma = new PrismaClient()

// export const getPictures = (req, res) => {
//     return pictures;
// }

export const getPictures = async () => {
    try {
        const pictures = await prisma.picture.findMany()
        return pictures
    } catch (error) {
        console.error('Error fetching pictures:', error)
        throw new Error('Failed to fetch pictures')
    }
}

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


