import {useContext} from 'react'
//import components
import {Navbar} from '../Navbar'
import {Footer} from '../Footer'
import { contextProduct } from '../../context'

export const Layout = ({children})=>{
    const context = useContext(contextProduct)
    return (
        <div className="grid grid-cols-5  grid-rows-[100px] auto-rows-min">
            <Navbar
            open={context.open}
            close={context.close}
            />
            {children}
            <Footer/>
        </div>
    )
}