import { collection, doc, getDocs, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addProduct, findAllProducts } from './productSlice'

const productCollection = collection(FirebaseDB, '/Products')
        
export const createProduct = (product = {} )=>{
    return async ( dispatch, getState )=>{

        const newDoc = doc( productCollection )
        const res = await setDoc( newDoc, product )
     

        dispatch( addProduct({
            created: true
        }))
    }
}

export const readProducts = ()=>{
    return async ( dispatch )=>{
        const product = await getDocs( productCollection )
        const products = []
        product.forEach( product => {
            products.push({
                id: product.id, ...product.data()
            })
        })
       
        dispatch( findAllProducts( products ) )
    }
}