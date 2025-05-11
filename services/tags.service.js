const tags = []

export const getTags = () => {
    return tags
}

export const getTag = (id) => {
    const tag = tags.find(tag => tag.id === id)
    if (!tag) {
        throw new Error(`Tag with id ${id} not found`)
    }
    return tag
}


export const createTag = (tag) => {
    const newTag = { id: tags.length + 1, ...tag }
    tags.push(newTag)
    return newTag
}

export const updateTag = (id, updatedTag) => {
    const index = tags.findIndex(tag => tag.id === id)
    if (index === -1) {
        throw new Error(`Tag with id ${id} not found`)
    }
    tags[index] = { ...tags[index], ...updatedTag }
    return tags[index]
}

export const deleteTag = (id) => {
    const index = tags.findIndex(tag => tag.id === id)
    if (index === -1) {
        throw new Error(`Tag with id ${id} not found`)
    }
    const deletedTag = tags.splice(index, 1)
    return deletedTag[0]
}

export const getTagsByPostId = (postId) => {
    return tags.filter(tag => tag.postId === postId)
}

export const deletedTagByPostId = (postId) => {
    const index = tags.findIndex(tag => tag.postId === postId)
    if (index === -1) {
        throw new Error(`Tag with post id ${postId} not found`)
    }
    const deletedTag = tags.splice(index, 1)
    return deletedTag[0]
}