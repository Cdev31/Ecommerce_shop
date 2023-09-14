import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
   name: 'auth',

   initialState: {
    status: 'checking',
    uuid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
   },

   reducers: {
    login: (state, { payload })=>{
        state.status = 'authenticated',
        state.uuid = payload.uid,
        state.email= payload.email,
        state.displayName = payload.displayName,
        state.photoURL = payload.photoURL,
        state.errorMessage = null
    },
    logout: (state, { payload })=>{

    },
    checkingCredentials: (state)=>{
        
    }

},
})


export const { login, logout, checkingCredentials } = authSlice.actions