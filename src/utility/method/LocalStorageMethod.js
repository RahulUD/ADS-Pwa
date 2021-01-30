import {TOKEN, USER, UNDEFINED} from './../constant/LocalStorage'
export const setTokeninLocalStorage = (payload) =>{
    localStorage.setItem(TOKEN,payload.data.data.token )
}
export const setUserinLocalStorage = (payload) =>{
    localStorage.setItem(USER,payload.data.data.user )
}
export const isTokenAvilableInLocalStorage =()=>{
    if(localStorage.getItem(TOKEN)){
        return true
    }
    return false
}