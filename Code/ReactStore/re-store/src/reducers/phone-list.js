import {FETCH_PHONES_FAILURE, FETCH_PHONES_REQUEST, FETCH_PHONES_SUCCESS} from "../action-types"

const updatePhoneList = (state, action) => {
    if (state === undefined) {
        return {
            phones: [],
            loading: true,
            error: null,
        }
    }
    switch (action.type) {
        case FETCH_PHONES_REQUEST:
            return {
                phones: [],
                loading: true,
                error: null
            }
        case FETCH_PHONES_SUCCESS:
            return {
                phones: action.payload,
                loading: false,
                error: null
            }
        case FETCH_PHONES_FAILURE:
            return {
                phones: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.phoneList
    }
}
export default updatePhoneList