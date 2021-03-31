import updatePhoneList from "./phone-list"
import updateShoppingCart from "./shopping-cart"

const reducer = (state, action) => {
    return {
        phoneList: updatePhoneList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}

export default reducer