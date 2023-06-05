import {createPortal} from 'react-dom'

const NavModal = ()=>{
    return createPortal(
        document.getElementById('vertical-nav',
        {children}
        )
    )
}