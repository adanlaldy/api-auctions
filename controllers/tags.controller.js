import { getTags, getTag, createTag, updateTag, deleteTag, getTagsByPostId, deletedTagByPostId } from '../services/tags.service.js'


export const getAllTags = (req, res) => {
    res.json({
        success: true,
        tags: getTags(),
    })
}

export const createTagController = (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        })
    }

    const tag = createTag({ name })

    res.status(201).json({
        success: true,
        message: 'Tag created successfully',
        tag,
    })
}

export const getTagById = (req, res) => {
    const { id } = req.params

    const tag = getTag(id)

    if (!tag) {
        return res.status(404).json({
            success: false,
            message: 'Tag not found',
        })
    }

    res.json({
        success: true,
        tag,
    })
}

export const deleteTagById = (req, res) => {
    const { id } = req.params

    const tag = getTag(id)

    if (!tag) {
        return res.status(404).json({
            success: false,
            message: 'Tag not found',
        })
    }

    deleteTag(id)

    res.json({
        success: true,
        message: 'Tag deleted successfully',
    })
}

export const updateTagById = (req, res) => {
    const { id } = req.params
    const { name } = req.body

    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        })
    }

    const tag = getTag(id)

    if (!tag) {
        return res.status(404).json({
            success: false,
            message: 'Tag not found',
        })
    }

    updateTag(id, { name })

    res.json({
        success: true,
        message: 'Tag updated successfully',
    })
}

export const getTagsByPostIdController = (req, res) => {
    const { postId } = req.params

    const tags = getTagsByPostId(postId)

    if (!tags) {
        return res.status(404).json({
            success: false,
            message: 'Tags not found',
        })
    }

    res.json({
        success: true,
        tags,
    })
}

export const deleteTagByPostId = (req, res) => {
    const { postId } = req.params

    const tags = getTagsByPostId(postId)

    if (!tags) {
        return res.status(404).json({
            success: false,
            message: 'Tags not found',
        })
    }

    deletedTagByPostId(postId)

    res.json({
        success: true,
        message: 'Tags deleted successfully',
    })
}
