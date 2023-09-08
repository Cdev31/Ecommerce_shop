import {ReactComponent as Logo } from './logo.svg'

const iconTypes = {
    "logo": (color) => <Logo className="relative bottom-7 z-[1] cursor-pointer" fill={color}/>
}

export const CommonIcons = ({ type, color }) => {
    return (
        <>
            { iconTypes[type](color) }
        </>   
    )
}