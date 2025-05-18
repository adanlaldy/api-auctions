import { getFiles, addFile, getFileByIdService, deleteFileByIdService, updateFileByIdService } from '../services/files.services.js'

/**
 * Récupère tous les fichiers.
 * @route GET /files
 */
export const getAllFiles = async (req, res) => {
    try {
        const files = await getFiles()
        res.json({
            success: true,
            files,
        })
    } catch (error) {
        console.error('Error fetching files:', error)
        res.status(500).json({
            success: false,
            message: 'Failed to fetch files',
        })
    }
}

/**
 * Crée un nouveau fichier.
 * @route POST /files
 * @body { content, content_type }
 */
export const createFile = async (req, res) => {
    const { content, content_type } = req.body

    if (!content || !content_type) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        })
    }

    try {
        const fileId = await addFile({ content, content_type })

        res.status(201).json({
            success: true,
            fileId,
        })
    } catch (error) {
        console.error('Error creating file:', error)
        res.status(500).json({
            success: false,
            message: 'Failed to create file',
        })
    }
}

/**
 * Récupère un fichier par son ID.
 * @route GET /files/:id
 * @param {number} id - ID du fichier
 */
export const getFileById = async (req, res) => {
    const { id } = req.params

    const file = await getFileByIdService(id)

    if (!file) {
        return res.status(404).json({
            success: false,
            message: 'File not found',
        })
    }

    res.json({
        success: true,
        file,
    })
}

/**
 * Supprime un fichier par son ID.
 * @route DELETE /files/:id
 * @param {number} id - ID du fichier
 */
export const deleteFileById = async (req, res) => {
    const { id } = req.params

    const file = await getFileByIdService(id)

    if (!file) {
        return res.status(404).json({
            success: false,
            message: 'File not found',
        })
    }

    deleteFileByIdService(id)

    res.json({
        success: true,
        message: 'File deleted successfully',
    })
}

/**
 * Récupère les fichiers par type de contenu.
 * @route GET /files/type/:content_type
 * @param {string} content_type - Type de contenu (ex: image/png, application/pdf)
 */
export const getFilesbyContentType = (req, res) => {
    const { content_type } = req.params

    const files = getFiles().filter(file => file.content_type === content_type)

    if (files.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No files found',
        })
    }

    res.json({
        success: true,
        files,
    })
}

/**
 * Met à jour un fichier par son ID.
 * @route PUT /files/:id
 * @param {number} id - ID du fichier
 * @body { content?, contentType? }
 */
export const updateFileById = async (req, res) => {
    const { id } = req.params
    const { content, contentType } = req.body

    try {
        const updatedFile = await updateFileByIdService(id, { content, contentType })

        if (!updatedFile) {
            return res.status(404).json({
                success: false,
                message: 'File not found',
            })
        }

        res.json({
            success: true,
            file: updatedFile,
        })
    } catch (error) {
        console.error('Error updating file:', error)
        res.status(500).json({
            success: false,
            message: 'Failed to update file',
        })
    }
}