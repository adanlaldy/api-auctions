import { getAll, create, getById, deleteById, updateById } from '../services/auctions.services.js'


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

export const createAuctions = (req, res) => {
    const { title, description, initialPrice, startBidDate, endBidDate, sellerId } = req.body
    // to define end_bid_date, created_at, updated_at, deleted_at, tag_id, buyer_id, state_id
    if (!title || !description || !initialPrice || !startBidDate || !sellerId) {
        return res.status(400).json({
            success: false,
            message: 'Please provide all required fields',
        })
    }

    create({ title, description, initialPrice, startBidDate, endBidDate, sellerId })

    res.status(201).json({
        success: true,
        user: 'Auction created successfully',
    })
}

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

export const updateAuctionById = async (req, res) => {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid auction id',
        })
    }
    const { title, description, initialPrice, actualBidPrice, startBidDate, endBidDate, buyerId, stateId } = req.body

    try {
        const auction = await getById(id)
        if (!auction) {
            return res.status(404).json({
                success: false,
                message: 'Auction not found',
            })
        }
        const updatedAuction = await updateById(id, { title, description, initialPrice, actualBidPrice, startBidDate, endBidDate, buyerId, stateId })
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



export const AuctionBySellerId = (req, res) => {
    const { sellerId } = req.params

    const auctions = getAll().filter(auction => auction.seller_id === sellerId)

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
}

