import { getAll, create, getById, deleteById, updateById } from '../services/auctions.services.js'


/**
 * Récupère toutes les enchères.
 * @route GET /auctions
 */
export const getAllAuctions = async (req, res) => {
    try {
        const auctions = await getAll()

        res.status(200).json(auctions)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch auctions',
        })
    }
}

/**
 * Crée une nouvelle enchère.
 * @route POST /auctions
 * @body { title, description, initialPrice, startBidDate, endBidDate?, sellerId }
 */
export const createAuctions = async (req, res) => {
    const {
        title,
        description,
        initialPrice,
        startBidDate,
        endBidDate,
        sellerId,
        tagName,
        fileId,
        pictures,
    } = req.body;

    if (!title || !description || !initialPrice || !startBidDate || !sellerId || !tagName || !fileId) {
        return res.status(400).json({
            success: false,
            message: 'Please provide all required fields (title, description, initialPrice, startBidDate, sellerId, tagName, fileId)',
        });
    }

    // Validation des dates selon le format "YYYY-MM-DDTHH:mm"
    const parseDateIfValid = (dateStr) => {
        if (!dateStr) return null;
        const date = new Date(dateStr);
        return isNaN(date.getTime()) ? null : date;
    }

    const parsedStartBidDate = parseDateIfValid(startBidDate);
    if (!parsedStartBidDate) {
        return res.status(400).json({
            success: false,
            message: 'Invalid startBidDate format',
        });
    }

    const parsedEndBidDate = parseDateIfValid(endBidDate);

    try {
        const newAuction = await create({
            title,
            description,
            initialPrice: Number(initialPrice),
            startBidDate: parsedStartBidDate,
            endBidDate: parsedEndBidDate, // null si invalide ou absent
            sellerId: Number(sellerId),
            tagName,
            fileId: Number(fileId),
            pictures,
        });

        return res.status(201).json({
            success: true,
            auction: newAuction,
        });
    } catch (error) {
        console.error('Auction creation failed:', error.message);
        return res.status(500).json({
            success: false,
            message: 'Failed to create auction',
        });
    }
};

/**
 * Récupère une enchère par son ID.
 * @route GET /auctions/:id
 * @param {number} id - ID de l’enchère
 */
export const getAuctionById = async (req, res) => {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid auction id',
        })
    }
    try {
        const auction = await getById(id)
        if (!auction) {
            return res.status(404).json({
                success: false,
                message: 'Auction not found',
            })
        }
        res.status(200).json({
            success: true,
            auction,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch auction',
        })
    }
}

/**
 * Supprime une enchère par son ID.
 * @route DELETE /auctions/:id
 * @param {number} id - ID de l’enchère
 */
export const deleteAuctionById = async (req, res) => {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid auction id',
        })
    }
    try {
        const auction = await getById(id)
        if (!auction) {
            return res.status(404).json({
                success: false,
                message: 'Auction not found',
            })
        }
        await deleteById(id)
        res.json({
            success: true,
            message: 'Auction deleted successfully',
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete auction',
        })
    }
}

/**
 * Met à jour une enchère par son ID.
 * @route PUT /auctions/:id
 * @param {number} id - ID de l’enchère
 * @body { title?, description?, initialPrice?, actualBidPrice?, startBidDate?, endBidDate?, buyerId?, stateId? }
 */
export const updateAuctionById = async (req, res) => {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid auction id',
        })
    }
    const {
        title,
        description,
        initialPrice,
        actualBidPrice,
        startBidDate,
        endBidDate,
        buyerId,
        stateId
    } = req.body

    try {
        const auction = await getById(id)
        if (!auction) {
            return res.status(404).json({
                success: false,
                message: 'Auction not found',
            })
        }
        // Convertir types si besoin
        const updatedAuction = await updateById(id, {
            title,
            description,
            initialPrice: initialPrice !== undefined ? Number(initialPrice) : undefined,
            actualBidPrice: actualBidPrice !== undefined ? Number(actualBidPrice) : undefined,
            startBidDate: startBidDate ? new Date(startBidDate) : undefined,
            endBidDate: endBidDate ? new Date(endBidDate) : undefined,
            buyerId: buyerId !== undefined ? Number(buyerId) : undefined,
            stateId: stateId !== undefined ? Number(stateId) : undefined,
        })

        res.status(200).json({
            success: true,
            auction: updatedAuction,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update auction',
        })
    }
}

/**
 * Récupère les enchères selon leur état.
 * @route GET /auctions/state/:state
 * @param {string} state - État de l’enchère (Open, Pending, etc.)
 */
export const getAuctionsByState = async (req, res) => {
    const { state } = req.params

    try {
        const auctions = await getAll()
        const filteredAuctions = auctions.filter(auction => auction.state === state)

        if (filteredAuctions.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No auctions found for this state',
            })
        }

        res.json({
            success: true,
            auctions: filteredAuctions,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch auctions',
        })
    }
}

/**
 * Récupère les enchères selon une fourchette de prix.
 * @route POST /auctions/price-range
 * @body { minprice?, maxprice? }
 */
export const getAuctionByPriceRange = async (req, res) => {
    const { minprice, maxprice } = req.body;
    const minPrice = minprice !== undefined ? parseFloat(minprice) : undefined;
    const maxPrice = maxprice !== undefined ? parseFloat(maxprice) : undefined;

    if (minPrice === undefined && maxPrice === undefined) {
        return res.status(400).json({
            success: false,
            message: 'Please provide at least one price range',
        });
    }

    try {
        const allAuctions = await getAll(); // 👈 ATTENTION ICI : bien attendre la promesse
        console.log("Fetched auctions:", allAuctions); // 👈 debug

        if (!Array.isArray(allAuctions)) {
            return res.status(500).json({
                success: false,
                message: 'Invalid auctions data format returned from service',
            });
        }

        const auctions = allAuctions.filter(auction => {
            const price = parseFloat(auction.initialPrice); // 👈 en base, le champ peut s’appeler "initialPrice"
            if (minPrice !== undefined && maxPrice !== undefined) {
                return price >= minPrice && price <= maxPrice;
            } else if (minPrice !== undefined) {
                return price >= minPrice;
            } else if (maxPrice !== undefined) {
                return price <= maxPrice;
            }
        });

        if (auctions.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No auctions found for this price range',
            });
        }

        res.json({
            success: true,
            auctions,
        });

    } catch (error) {
        console.error('Error in getAuctionByPriceRange:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch auctions by price range',
        });
    }
};



/**
 * Récupère les enchères d’un vendeur donné.
 * @route GET /auctions/seller/:sellerId
 * @param {number} sellerId - ID du vendeur
 */
export const AuctionBySellerId = async (req, res) => {
    const sellerId = Number(req.params.sellerId)
    if (isNaN(sellerId)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid seller id',
        })
    }

    try {
        const allAuctions = await getAll()
        const auctions = allAuctions.filter(auction => auction.sellerId === sellerId)

        if (auctions.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No auctions found for this seller',
            })
        }

        res.json({
            success: true,
            auctions,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch auctions by seller',
        })
    }
}

