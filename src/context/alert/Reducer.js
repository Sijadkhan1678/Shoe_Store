import { SET_ALERT, REMOVE_ALERT } from './constant'

const Reducer = (state, action) => {

    switch (action.type) {

        case SET_ALERT:
            return state = action.payload

        case REMOVE_ALERT:
            return state = null

        default:
            return state
    }
}
export default Reducer