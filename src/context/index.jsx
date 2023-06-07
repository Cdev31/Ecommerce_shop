import {createContext,useState} from 'react'

//custom api
import {useApi} from './useApi'

export const contextProduct = createContext()

export const GlobalProvider = ({children})=>{
    const {items:products} = useApi()

    //abrir menu vertical
    const [openMenu,setOpenMenu] = useState(false)

    const open = ()=>{
        setOpenMenu(true)
    }

    const close = ()=>{
        setOpenMenu(false)
    }

    //buscar un solo producto por id
    const findOneProduct = (id)=>{
        return products.filter((e)=>e.id === id)
    }

    //abrir loginform
    const [openLogin,setOpenLogin] = useState(false)

    const openLog =()=>{
        setOpenLogin(true)
    }

    const closeLog =()=>{
        setOpenLogin(false)
    }
    return (
        <contextProduct.Provider
        value={{
            products,
            open,
            close,
            openMenu,
            findOneProduct,
            openLog,
            closeLog,
            openLogin
        }}
        >
            {children}
        </contextProduct.Provider>
    )
}