import {TOKEN, USER} from 'utility/constant/LocalStorage'
export const setTokeninLocalStorage = (payload) =>{
    localStorage.setItem(TOKEN,payload.data.data.token )
}
export const setUserinLocalStorage = (payload) =>{
    localStorage.setItem(USER,payload.data.data.user.name )
}
export const unsetTokeninLocalStorage = () =>{
    localStorage.removeItem(TOKEN)
}
export const unsetUserinLocalStorage = () =>{
    localStorage.removeItem(USER)
}
export const isTokenAvilableInLocalStorage =()=>{
    if(localStorage.getItem(TOKEN)){
        return true
    }
    return false
}