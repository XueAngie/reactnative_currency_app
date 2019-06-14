
import {
    SIGN_IN,
    SIGN_UP
} from '../types'

export default function( state={}, action ) {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                auth: {
                    uid: action.payload.localId || false,
                }
            }
            break;

        case SIGN_UP:
            return {
                ...state,
                auth: {
                    uid: action.payload.localId || false,
                }
            }
            break;
    
        default:
            return state
            break;
    }
}