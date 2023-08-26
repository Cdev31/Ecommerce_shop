import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore/lite'

import { FirebaseDB } from '../../Firebase/config'

import { addNewProduct, getProducts } from './productSlice'


const productRef = collection( FirebaseDB, '/products' )

export const AddProduct = ( product = {})=>{
    return async ( dispatch, getState )=>{
        
        const newProduct = {
            title: product.title,
            description: product.description,
            category: 'Limpieza',
            stock: product.stock,
            price: product.price,
            labels: [
                "Almohada",
                "Sueno",
                "Hogar",
                "Dormitorio"
            ],
            images: [
                "http://local.image.com/image.png",
                "http://local.image.com/image.png"
            ],
            expiration: new Date().toISOString()
        }

        const newDoc = doc( collection( FirebaseDB, '/products'))
        const res = await setDoc( newDoc, newProduct )
       
        dispatch( addNewProduct( newProduct )  )
    }
}


export const readProducts = ()=>{
    return async ( dispatch, getState )=>{

        const product = await getDocs( productRef )

        const products = []
        product.forEach( product =>{
            products.push({ id: product.id, ...product.data() })
        })

        dispatch( getProducts( products ) )

    }
}