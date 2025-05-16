import dotenv from 'dotenv'
import { PrismaClient } from '../generated/prisma/index.js';

dotenv.config()
const prisma = new PrismaClient()

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


// export const getFileByIdService = async (id) => {
//     try {
//         const file = await prisma.file.findUnique({
//             where: { id: Number(id) }
//         })
//         return file
//     } catch (error) {
//         console.error('Error fetching file by ID:', error)
//         throw new Error('Failed to fetch file by ID')
//     }
// }

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