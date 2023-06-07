import { createPortal } from "react-dom"


export const LoginModal = ({children})=>{
    return createPortal(
        <div className="w-[100vh] h-full top-0 bg-black/20">
        {children}
        </div>,
        document.getElementById('login-modal')
    )
}