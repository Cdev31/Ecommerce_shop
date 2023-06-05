import {useState} from 'react'
//import components
import {Navbar} from '../Navbar'
import {VerticalNavbar} from '../VerticalNavbar'
import {Footer} from '../Footer'

export const Layout = ({children})=>{
    const [openMenu,setOpenMenu] = useState(false)

    const open = ()=>{
        setOpenMenu(true)
    }

    const close = ()=>{
        setOpenMenu(false)
    }

    return (
        <div className="grid grid-cols-5  grid-rows-[100px] auto-rows-min">
            <Navbar
            open={open}
            close={close}
            />
            <VerticalNavbar
            openNav={openMenu}
            close={close}
            />
            {children}
            <Footer/>
        </div>
    )
}