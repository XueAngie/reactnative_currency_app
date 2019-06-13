
import {
    SIGN_IN,
    SIGN_UP
} from '../types'

export default function( state={}, action ) {
    switch (action.type) {
        case SIGN_IN:
            return state
            break;

        case SIGN_UP:
            return state
            break;
    
        default:
            return state
            break;
    }
}