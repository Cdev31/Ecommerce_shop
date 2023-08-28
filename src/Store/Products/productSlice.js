import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
   name: 'product',

   initialState: {
      products: [],
   },

   reducers: {
      getProducts: ( state, action )=>{
         state.products = action.payload
      },

      addNewProduct:(state, { payload } )=>{
        state.products.push( payload  )
      },
      getProductById: ( state, action )=>{
         state.products = state.products.filter( product => product.id === action.payload.id  )
      },
      updateProducts: ( state, action )=>{

      },
      deleteProductById: ( state, action )=>{

      },
      searchByPrice: ( state, action )=>{

      }
},
})


export const { addNewProduct, getProductById, getProducts } = productSlice.actions