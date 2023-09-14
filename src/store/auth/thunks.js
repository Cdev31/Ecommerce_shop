import { singInWithGoogle } from "../../firebase/provider"
import { login, logout } from './authSlice'


export const startGoogleSignIn = ()=>{
    return async ( dispatch )=>{
        const result = await singInWithGoogle()
        if( !result.ok ) return dispatch( logout( result.errorMessage ) )
        console.log(result)
        dispatch( login( result ) )
    }
}