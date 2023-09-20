import { collection, doc, getDocs, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addProduct, findAllProducts } from './productSlice'
import { uploadImages } from './utils/uploadFiles'

const productCollection = collection(FirebaseDB, '/Products')
        
export const createProduct = (product = {} )=>{
    return async ( dispatch, getState )=>{

        const newDoc = doc( productCollection )
        
        const url = await uploadImages(product.file[0].file, `/Products/${product.file[0].id}` )
        const newProduct = {
            price: product.price,
            stock: product.stock,
            description: product.description,
            images: [url]
            
        }
         const res = await setDoc( newDoc, newProduct )

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