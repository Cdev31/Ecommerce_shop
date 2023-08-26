import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
   name: 'product',

   initialState: {
      products: [{
         id: null,
         title: null,
         description: null,
         category: null,
         stock: null,
         price: null,
         labels: [],
         images: [],
         expiration: null
      }]
   },

   reducers: {
      getProducts: ( state, action )=>{
         state.products = action.payload
      },

      addNewProduct:(state, { payload } )=>{
        state.products.push( payload  )
      //   state.labels.push( payload.labels )
      //   state.images.push( payload.images )
       
      },
      getProductById: ( state, action )=>{

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