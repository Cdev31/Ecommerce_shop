import { Footer } from "../components/Footer"
import { NavBar } from "../components/Navbar"



export const Layout = ({ children })=>{
    return (
        <div>
            <NavBar/>
            { children }
            <Footer/>
        </div>
    )
}