import { getPictures, createPicture, getById, deleteById, updateById } from '../services/pictures.services.js'

// export const getAllPictures = (req, res) => {
//     const pictures = getPictures()
//     res.json({
//         success: true,
//         pictures: getPictures(),
//     })
// }

export const getAllPictures = async (req, res) => {
    const pictures = await getPictures()
    res.json({
        success: true,
        pictures,
    })
}

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


// export const getPictureById = async (req, res) => {
//     const { id } = req.params

//     const picture = await getById(id)

//     if (!picture) {
//         return res.status(404).json({
//             success: false,
//             message: 'Picture not found',
//         })
//     }

//     res.json({
//         success: true,
//         picture,
//     })
// }

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

// export const deletePictureById = (req, res) => {
//     const { id } = req.params

//     const picture = getById(id)

//     if (!picture) {
//         return res.status(404).json({
//             success: false,
//             message: 'Picture not found',
//         })
//     }

//     deleteById(id)

//     res.json({
//         success: true,
//         message: 'Picture deleted successfully',
//     })
// }

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

// export const deletePicturesByAuctionId = (req, res) => {
//     const { auction_id } = req.params

//     const pictures = getPictures().filter(picture => picture.auction_id === auction_id)

//     if (pictures.length === 0) {
//         return res.status(404).json({
//             success: false,
//             message: 'No pictures found for this auction',
//         })
//     }

//     pictures.forEach(picture => deleteById(picture.id))

//     res.json({
//         success: true,
//         message: 'Pictures deleted successfully',
//     })
// }

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