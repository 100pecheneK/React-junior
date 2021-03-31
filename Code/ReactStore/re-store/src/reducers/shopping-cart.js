import {
    ALL_PHONES_REMOVED_FROM_CART,
    PHONE_ADDED_TO_CART,
    PHONE_REMOVED_FROM_CART
} from "../action-types"

const updateCarItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    } else {
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ]
    }
}
const updateCarItem = (phone, item = {}, quantity) => {
    const {
        id = phone.id,
        title = phone.title,
        count = 0,
        total = 0
    } = item

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * phone.price
    }
}
const updateOrder = (state, phoneId, quantity) => {
    const {phoneList: {phones}, shoppingCart: {cartItems}} = state
    const phone = phones.find(({id}) => id === phoneId)
    const itemIndex = cartItems.findIndex(({id}) => id === phoneId)
    const item = cartItems[itemIndex]
    const newItem = updateCarItem(phone, item, quantity)
    return {
        cartItems: updateCarItems(cartItems, newItem, itemIndex),
        orderTotal: 0
    }
}
const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }

    }
    switch (action.type) {
        case PHONE_ADDED_TO_CART:
            return updateOrder(state, action.payload, 1)
        case PHONE_REMOVED_FROM_CART:
            return updateOrder(state, action.payload, -1)
        case ALL_PHONES_REMOVED_FROM_CART:
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload)
            return updateOrder(state, action.payload, -item.count)
        default:
            return state.shoppingCart
    }
}
export default updateShoppingCart