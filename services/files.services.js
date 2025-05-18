import dotenv from 'dotenv'
import { PrismaClient } from '../generated/prisma/index.js';

dotenv.config()
const prisma = new PrismaClient()

/**
 * Récupère tous les fichiers.
 * @returns {Promise<Array>} Liste des fichiers
 */
export const getFiles = async () => {
    try {
        const files = await prisma.file.findMany()
        return files
    }
    catch (error) {
        console.error('Error fetching files:', error)
        throw new Error('Failed to fetch files')
    }
}

/**
 * Ajoute un nouveau fichier.
 * @param {Object} file - Données du fichier à ajouter
 * @returns {Promise<number>} ID du fichier créé
 */
export const addFile = async (file) => {
    try {
        const newFile = await prisma.file.create({
            data: file
        })
        return newFile.id
    } catch (error) {
        console.error('Error adding file:', error)
        throw new Error('Failed to add file')
    }
}

/**
 * Récupère un fichier par son ID.
 * @param {number} id - ID du fichier
 * @returns {Promise<Object|null>} Le fichier ou null si non trouvé
 */
export const getFileByIdService = async (id) => {
    try {
        const file = await prisma.file.findUnique({
            where: { id: Number(id) }
        })
        return file
    } catch (error) {
        console.error('Error fetching file by ID:', error)
        throw new Error('Failed to fetch file by ID')
    }
}

/**
 * Supprime un fichier par son ID.
 * @param {number} id - ID du fichier
 */
export const deleteFileByIdService = async (id) => {
    try {
        await prisma.file.delete({
            where: { id: Number(id) }
        })
    } catch (error) {
        console.error('Error deleting file by ID:', error)
        throw new Error('Failed to delete file by ID')
    }
}

/**
 * Met à jour un fichier par son ID.
 * @param {number} id - ID du fichier
 * @param {Object} file - Données à mettre à jour
 * @returns {Promise<Object>} Le fichier mis à jour
 */
export const updateFileByIdService = async (id, file) => {
    try {
        const updatedFile = await prisma.file.update({
            where: { id: Number(id) },
            data: file
        })
        return updatedFile
    } catch (error) {
        console.error('Error updating file by ID:', error)
        throw new Error('Failed to update file by ID')
    }
}