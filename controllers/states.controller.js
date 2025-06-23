import { getStates, create } from '../services/states.services.js'

/**
 * Récupère tous les états possibles d'enchère.
 * @route GET /states
 */
export const getAllStates = async (req, res) => {
    try {
        const states = await getStates()
        res.json({
            success: true,
            states: states,
        })
    } catch (error) {
        console.error('Error fetching states:', error)
        res.status(500).json({
            success: false,
            message: 'Failed to fetch states',
        })
    }
}

export const createStates = async (req, res) => {
    const { states } = req.body  // <- attention au nom, on attend un tableau 'states'

    if (!states || !Array.isArray(states) || states.length === 0) {
        return res.status(400).json({
            success: false,
            message: 'States field is required and must be a non-empty array',
        })
    }

    try {
        const createdStates = await create(states)  // <- passer states en argument
        res.status(201).json({
            success: true,
            states: createdStates,
        })
    } catch (error) {
        console.error('Error creating states:', error)
        res.status(500).json({
            success: false,
            message: 'Failed to create states',
        })
    }
}
