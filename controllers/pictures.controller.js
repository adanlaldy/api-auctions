import { getPictures, createPicture, getById, deleteById, updateById } from '../services/pictures.services.js'

/**
 * Récupère toutes les images.
 * @route GET /pictures
 */
export const getAllPictures = async (req, res) => {
    const pictures = await getPictures()
    res.json({
        success: true,
        pictures,
    })
}

/**
 * Crée une nouvelle image pour une enchère.
 * @route POST /pictures
 * @body { path, auction_id }
 */
export const createNewPicture = async (req, res) => {
    let { path, auction_id } = req.body
    if (!path || !auction_id) {
        return res.status(400).json({
            success: false,
            message: 'Path and auction_id are required',
        })
    }
    auction_id = Number(auction_id)
    if (isNaN(auction_id)) {
        return res.status(400).json({
            success: false,
            message: 'auction_id must be a number',
        })
    }
    try {
        const pictureId = await createPicture({ path, auction_id })
        res.status(201).json({
            success: true,
            message: 'Picture created successfully',
            pictureId,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create picture',
        })
    }
}

/**
 * Récupère une image par son ID.
 * @route GET /pictures/:id
 * @param {number} id - ID de l'image
 */
export const getPictureById = async (req, res) => {
    const { id } = req.params
    const picture = await getById(id)
    if (!picture) {
        return res.status(404).json({
            success: false,
            message: 'Picture not found',
        })
    }
    res.json({
        success: true,
        picture,
    })
}

/**
 * Supprime une image par son ID.
 * @route DELETE /pictures/:id
 * @param {number} id - ID de l'image
 */
export const deletePictureById = async (req, res) => {
    const { id } = req.params

    const picture = await getById(id)

    if (!picture) {
        return res.status(404).json({
            success: false,
            message: 'Picture not found',
        })
    }

    await deleteById(id)

    res.json({
        success: true,
        message: 'Picture deleted successfully',
    })
}

/**
 * Récupère toutes les images d'une enchère.
 * @route GET /pictures/auction/:auction_id
 * @param {number} auction_id - ID de l'enchère
 */
export const getPicturesByAuctionId = async (req, res) => {
    const { auction_id } = req.params

    const pictures = await getPictures().filter(picture => picture.auction_id === auction_id)

    if (pictures.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No pictures found for this auction',
        })
    }

    res.json({
        success: true,
        pictures,
    })
}

/**
 * Supprime toutes les images d'une enchère.
 * @route DELETE /pictures/auction/:auction_id
 * @param {number} auction_id - ID de l'enchère
 */
export const deletePicturesByAuctionId = async (req, res) => {
    const { auction_id } = req.params

    const pictures = await getPictures().filter(picture => picture.auction_id === auction_id)

    if (pictures.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No pictures found for this auction',
        })
    }

    await Promise.all(pictures.map(picture => deleteById(picture.id)))

    res.json({
        success: true,
        message: 'Pictures deleted successfully',
    })
}

/**
 * Met à jour une image par son ID.
 * @route PUT /pictures/:id
 * @param {number} id - ID de l'image
 * @body { path? }
 */
export const updatePictureById = async (req, res) => {
    const { id } = req.params
    const { path, auction_id } = req.body

    const picture = await getById(id)

    if (!picture) {
        return res.status(404).json({
            success: false,
            message: 'Picture not found',
        })
    }

    if (!path) {
        return res.status(400).json({
            success: false,
            message: 'At least one field is required to update',
        })
    }

    await updateById(id, { path })

    res.json({
        success: true,
        message: 'Picture updated successfully',
    })
}