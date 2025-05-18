import dotenv from 'dotenv'
import { PrismaClient } from '../generated/prisma/index.js';

dotenv.config()
const prisma = new PrismaClient()


/**
 * Récupère tous les tags.
 * @returns {Promise<Array>} Liste des tags
 */
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

/**
 * Récupère un tag par son ID.
 * @param {number} id - ID du tag
 * @returns {Promise<Object>} Le tag trouvé
 */
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

/**
 * Crée un nouveau tag.
 * @param {Object} tag - Données du tag à créer
 * @returns {Promise<Object>} Le tag créé
 */
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

/**
 * Met à jour un tag par son ID.
 * @param {number} id - ID du tag
 * @param {Object} updatedTag - Données à mettre à jour
 * @returns {Promise<Object>} Le tag mis à jour
 */
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

/**
 * Supprime un tag par son ID.
 * @param {number} id - ID du tag
 * @returns {Promise<Object>} Le tag supprimé
 */
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

/**
 * Récupère les tags associés à un post.
 * @param {number} postId - ID du post
 * @returns {Promise<Array>} Liste des tags associés
 */
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

/**
 * Supprime un tag par l'ID du post.
 * @param {number} postId - ID du post
 * @returns {Promise<Object>} Le tag supprimé
 */
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