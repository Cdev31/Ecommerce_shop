import {createContext,useState} from 'react'

//custom api
import {useApi} from './useApi'

export const contextProduct = createContext()

export const GlobalProvider = ({children})=>{
    const {items:products,item:product,findOneProduct} = useApi()

    //abrir menu vertical
    const [openMenu,setOpenMenu] = useState(false)

    const open = ()=>{
        setOpenMenu(true)
    }

    const close = ()=>{
        setOpenMenu(false)
    }

    
    //abrir loginform
    const [openLogin,setOpenLogin] = useState(false)

    const openLog =()=>{
        setOpenLogin(true)
    }

    const closeLog =()=>{
        setOpenLogin(false)
    }

    //cambiar color de navbar por categoria
    const [category,setCategory] = useState('bg-black')

    const changeColor = (category)=>{
        if(category == 'Electronic'){
            setCategory({categoryColor: 'bg-red-950', border: 'border-red-950'})
        }
        if(category == 'Shoes'){
            setCategory({categoryColor: 'bg-cyan-950', border: 'border-cyan-950'})
        }
        if(category == 'Clothes'){
            setCategory({categoryColor: 'bg-green-950', border: 'border-green-950'})
        }
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
            openLogin,
            product,
            changeColor,
            category
        }}
        >
            {children}
        </contextProduct.Provider>
    )
}