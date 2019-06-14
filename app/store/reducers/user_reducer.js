
import {
    SIGN_IN,
    SIGN_UP
} from '../types'

export default function( state={}, action ) {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                auth:{
                    email:action.payload.email || false
                }
            }
            break;

        case SIGN_UP:
            return {
                ...state,
                auth: {
                    email: action.payload.email || false
                }
            }
            break;
    
        default:
            return state
            break;
    }
}