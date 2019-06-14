import {
    SIGN_IN,
    SIGN_UP,
} from '../types'

// import axios from 'axios'

export function signUp() {

    // const request = axios({
    //     method: 'POST',
    //     url: SIGNUP_URL,
    //     data: {
    //         email: data.email,
    //         password: data.password,
    //         returnSecureToken: true
    //     },
    //     header: {
    //         "Content-Type": "application/json"
    //     }
    // })
    //     .then(response => {
    //         console.log(response.data)
    //         return response.data
    //     })
    //     .catch(e => {
    //         return false
    //     })

    return {
        type: SIGN_UP,
        payload: {
            email:'test@gmail.com',
        }
    }
}

export function signIn() {

    // const request = axios({
    //     method: 'POST',
    //     url: SIGNIN_URL,
    //     data: {
    //         email: data.email,
    //         password: data.password,
    //         returnSecureToken: true
    //     },
    //     header: {
    //         "Content-Type": "application/json"
    //     }
    // })
    //     .then(response => {
    //         return response.data
    //     })
    //     .catch(e => {
    //         return false
    //     })
    return {
        type: SIGN_IN,
        payload: {
            email: 'test@gmail.com',
        }
    }
}
