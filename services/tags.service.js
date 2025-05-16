import dotenv from 'dotenv'
import { PrismaClient } from '../generated/prisma/index.js';

dotenv.config()
const prisma = new PrismaClient()


export const getTags = async () => {
    try {
        const tags = await prisma.tag.findMany()
        return tags
    } catch (error) {
        console.error('Error fetching tags:', error)
        throw new Error('Failed to fetch tags')
    }
}

// export const getTag = async (id) => {
//     try {
//         const tag = await prisma.tag.findUnique({
//             where: { id: Number(id) }
//         })
//         if (!tag) {
//             throw new Error(`Tag with id ${id} not found`)
//         }
//         return tag
//     } catch (error) {
//         console.error('Error fetching tag by ID:', error)
//         throw new Error('Failed to fetch tag by ID')
//     }
// }

export const getTag = async (id) => {
    try {
        const tag = await prisma.tag.findUnique({
            where: { id: Number(id) }
        })
        if (!tag) {
            throw new Error(`Tag with id ${id} not found`)
        }
        return tag
    } catch (error) {
        console.error('Error fetching tag by ID:', error)
        throw new Error('Failed to fetch tag by ID')
    }
}

export const createTag = async (tag) => {
    try {
        const newTag = await prisma.tag.create({
            data: tag
        })
        return newTag
    } catch (error) {
        console.error('Error creating tag:', error)
        throw new Error('Failed to create tag')
    }
}


export const updateTag = async (id, updatedTag) => {
    try {
        const tag = await prisma.tag.findUnique({
            where: { id: Number(id) }
        })
        if (!tag) {
            throw new Error(`Tag with id ${id} not found`)
        }
        const updated = await prisma.tag.update({
            where: { id: Number(id) },
            data: updatedTag
        })
        return updated
    } catch (error) {
        console.error('Error updating tag:', error)
        throw new Error('Failed to update tag')
    }
}

export const deleteTag = async (id) => {
    try {
        const tag = await prisma.tag.findUnique({
            where: { id: Number(id) }
        })
        if (!tag) {
            throw new Error(`Tag with id ${id} not found`)
        }
        await prisma.tag.delete({
            where: { id: Number(id) }
        })
        return tag
    } catch (error) {
        console.error('Error deleting tag:', error)
        throw new Error('Failed to delete tag')
    }
}

export const getTagsByPostId = async (postId) => {
    try {
        const tags = await prisma.tag.findMany({
            where: { postId: Number(postId) }
        })
        return tags
    } catch (error) {
        console.error('Error fetching tags by post ID:', error)
        throw new Error('Failed to fetch tags by post ID')
    }
}

export const deleteTagByPostIdService = async (postId) => {
    try {
        const tag = await prisma.tag.findUnique({
            where: { postId: Number(postId) }
        })
        if (!tag) {
            throw new Error(`Tag with post id ${postId} not found`)
        }
        await prisma.tag.delete({
            where: { postId: Number(postId) }
        })
        return tag
    } catch (error) {
        console.error('Error deleting tag by post ID:', error)
        throw new Error('Failed to delete tag by post ID')
    }
}