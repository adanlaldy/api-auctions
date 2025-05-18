import { getStates } from '../services/states.services.js'

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
