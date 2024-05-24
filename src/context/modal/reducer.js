import { OPEN_MODAL, CLOSE_MODAL, ADD_PRODUCT } from './types'

const Reducer = (state, action) => {
    switch (action.type) {

        case ADD_PRODUCT:
            return {
                ...state,
                product: action.payload
            }

        case OPEN_MODAL:
            return {
                ...state,
                open: true
            }

        case CLOSE_MODAL:
            return {
                ...state, product: null,
                modalOpen: false
            }

        default:
            return state
    }
}

export default Reducer