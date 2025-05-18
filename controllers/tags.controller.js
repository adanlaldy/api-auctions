import { getTags, getTag, createTag, updateTag, deleteTag, getTagsByPostId, deleteTagByPostIdService } from '../services/tags.service.js'


/**
 * Récupère tous les tags.
 * @route GET /tags
 */
export const getAllTags = async (req, res) => {
    const tags = await getTags()

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

/**
 * Crée un nouveau tag.
 * @route POST /tags
 * @body { name }
 */
export const createTagController = async (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        })
    }

    const tag = await createTag({ name })

    res.status(201).json({
        success: true,
        message: 'Tag created successfully',
        tag,
    })
}

/**
 * Récupère un tag par son ID.
 * @route GET /tags/:id
 * @param {number} id - ID du tag
 */
export const getTagById = async (req, res) => {
    const { id } = req.params

    const tag = await getTag(id)

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

/**
 * Supprime un tag par son ID.
 * @route DELETE /tags/:id
 * @param {number} id - ID du tag
 */
export const deleteTagById = async (req, res) => {
    const { id } = req.params

    const tag = await getTag(id)

    if (!tag) {
        return res.status(404).json({
            success: false,
            message: 'Tag not found',
        })
    }

    await deleteTag(id)

    res.json({
        success: true,
        message: 'Tag deleted successfully',
    })
}

/**
 * Met à jour un tag par son ID.
 * @route PUT /tags/:id
 * @param {number} id - ID du tag
 * @body { name }
 */
export const updateTagById = async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        })
    }

    const tag = await getTag(id)

    if (!tag) {
        return res.status(404).json({
            success: false,
            message: 'Tag not found',
        })
    }

    const updatedTag = await updateTag(id, { name })

    res.json({
        success: true,
        message: 'Tag updated successfully',
        tag: updatedTag,
    })
}

/**
 * Récupère les tags associés à un post.
 * @route GET /tags/post/:postId
 * @param {number} postId - ID du post
 */
export const getTagsByPostIdController = async (req, res) => {
    const { postId } = req.params

    const tags = await getTagsByPostId(postId)

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

/**
 * Supprime les tags associés à un post.
 * @route DELETE /tags/post/:postId
 * @param {number} postId - ID du post
 */
export const deleteTagByPostId = async (req, res) => {
    const { postId } = req.params

    const tag = await getTagsByPostId(postId)

    if (!tag) {
        return res.status(404).json({
            success: false,
            message: 'Tag not found',
        })
    }

    await deleteTagByPostIdService(postId)

    res.json({
        success: true,
        message: 'Tag deleted successfully',
    })
}