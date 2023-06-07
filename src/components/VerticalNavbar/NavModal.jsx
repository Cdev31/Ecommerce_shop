import {createPortal} from 'react-dom'

export const NavModal = ({children})=>{
    return createPortal(
        <div>
            {children}
        </div>,
        document.getElementById('vertical-nav'
        )
    )
}