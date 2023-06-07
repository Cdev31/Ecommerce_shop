
import {NavModal} from '../../components/VerticalNavbar/NavModal'
import {VerticalNavbar} from '../../components/VerticalNavbar'
import {AppRouter} from '../../router'
import {contextProduct} from '../../context'
import { useContext } from 'react'
import { LoginModal } from '../../components/Login/Modal'
import { LoginForm } from '../../components/Login'

export const AppUi = ()=>{
    const {openMenu,openLogin} = useContext(contextProduct)
    return (
        <>
        <NavModal>
           {
            openMenu && (
                <VerticalNavbar />
            )
           }
        </NavModal>
        <LoginModal>
            {
                openLogin && (
                    <LoginForm/>
                )
            }
        </LoginModal>
        <AppRouter />
        </>
    )
}