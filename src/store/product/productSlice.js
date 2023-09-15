import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
   name: 'product',

   initialState: {
      uid: null,
      description: null,
      price: null,
      stock: null,
      shippingLocations: [],
      discount: null,
      restrictions: null,
      images: [],
      additionalDescriptions: [],
      created: null,
      products: []
   },

   reducers: {
      loadingProducts: ()=>{

      },
      findAllProducts: (state, { payload })=>{
        state.products = payload
      },
      findOneProduct: ()=>{

      },
      addProduct:( state, { payload } )=>{
        state.created = payload.created
      }
},
})


export const { loadingProducts, findAllProducts, findOneProduct, addProduct  } = productSlice.actions