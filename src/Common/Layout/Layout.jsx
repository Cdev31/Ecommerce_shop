import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"


export const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}