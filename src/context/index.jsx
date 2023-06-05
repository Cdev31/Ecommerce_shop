import {createContext} from 'react'

//custom api
import {useApi} from './useApi'

export const contextProduct = createContext()

export const GlobalProvider = ({children})=>{
    const {items:products} = useApi()

    return (
        <contextProduct.Provider
        value={{
            products
        }}
        >
            {children}
        </contextProduct.Provider>
    )
}