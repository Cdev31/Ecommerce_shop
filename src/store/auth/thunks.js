import { collection, setDoc, doc } from "firebase/firestore/lite"
import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/provider"
import { login, logout } from './authSlice'
import { FirebaseDB } from "../../firebase/config"

const userCollection = collection( FirebaseDB, '/Users' )

export const startGoogleSignIn = ()=>{
    return async ( dispatch )=>{
        
        const result = await singInWithGoogle()
        
        if( !result.ok ) return dispatch( logout( result.errorMessage ) )
       
        dispatch( login( result ) )
    }
}

export const startCreatingUserWithEmailPassword = (data)=>{
    return async ( dispatch ) =>{
        
        const result = await registerUserWithEmailPassword({ 
            email: data.email,
            password: data.password, 
            displayName: data.displayName 
        })

        const  newDoc = doc( userCollection )

        const userInfo = {
            ...data,
            dateOfBirth: data.dateOfBirth,
            member: 'gold',
            uid: result.uid
        }
        console.log(userInfo)
        const res = await setDoc( newDoc,  userInfo )
        
        if( !result.ok ) return dispatch( logout( result.errorMessage ) )
       

        dispatch( login( result ) )
    }
}
