import { files } from './files.services.js'
import { pictures } from './pictures.services.js'
const auctions = []

export const getAll = () => {
    return auctions
}

export const create = (auction) => {
    const newAuctionId = auctions.length + 1
    const startDate = new Date(auction.start_bid_date)
    const endDate = auction.end_bid_date
        ? new Date(auction.end_bid_date)
        : new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000) // +7 jours

    auctions.push({
        id: newAuctionId,
        ...auction,
        start_bid_date: startDate,
        end_bid_date: endDate,
        file_id: createFile(newAuctionId),
        actual_bid_price: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
        tag_id: null,
        buyer_id: null,
        state_id: null,
    })

    createPicture(auction.id)
    return auction.id
}

const createFile = (auctionId) => {
    const file = {
        id: files.length + 1,
        content: null,
        content_type: null,
    }
    files.push(file)
    return file.id
}

const createPicture = (auctionId) => {
    const picture = {
        id: pictures.length + 1,
        path: null,
        auctionId: auctionId,
    }
    pictures.push(picture)
}

export const getById = (id) => {
    return auctions.find((auction) => auction.id == id)
}

export const deleteById = (id) => {
    const index = auctions.findIndex((auction) => auction.id == id)
    if (index !== -1) {
        auctions.splice(index, 1)
    }
}

export const updateById = (id, auction) => {
    const index = auctions.findIndex((auction) => auction.id == id)
    if (index !== -1) {
        auctions[index] = {
            ...auctions[index],
            ...auction,
        }
    }
}