import { NavLink, Link, useNavigate } from "react-router-dom"
import {ReactComponent as Logo } from '../../icons/logo.svg'
import { useDispatch, useSelector } from "react-redux"
import { startGoogleSignIn } from "../../store/auth/thunks"
import { useEffect } from "react"


export const LoginPage = ()=>{
    const { status, errorMessage } = useSelector( state => state.auth )
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const onGoogleSignIn = ()=>{
        dispatch( startGoogleSignIn() )
    }

    useEffect(()=>{
        if( status === 'authenticated'){
            navigate({
                pathname: '/'
            })
        }
    }, [ status ])

    return (
        <main className="flex justify-center">
            <div className="flex flex-col gap-2 pt-10">
               <NavLink className="bg-theme h-52 rounded-xl" to="/">
                  <Logo className="cursor-pointer relative bottom-5"/>
               </NavLink>
                <form className=" flex flex-col max-w-md gap-2">
                    <label className="font-bold text-theme">Email</label>
                    <input 
                    className="border-b-2 border-theme focus:outline-none  placeholder:text-green-900/60 "
                    type="email" placeholder="example@gmail.com"/>
                    <label className="font-bold text-theme">Password</label>
                    <input 
                    className="focus:outline-none border-b-2 border-theme placeholder:text-green-900/60"
                    type="password" placeholder="password"/>
                </form>
                <button className="bg-theme text-white rounded-lg font-bold h-10 text-xl">Login</button>    
                <button
                onClick={onGoogleSignIn}
                className="bg-blue-500 rounded-lg h-10 text-white"> Google</button>
                <section>
                    <p className="flex flex-col">
                        <span className="font-bold text-sm">Aun no tienes una cuenta?</span>
                        <Link to="/SigIn" className="font-bold text-sm underline text-blue-500 cursor-pointer hover:text-yellow-500">Registrate aqui</Link>
                    </p>
                </section>
            </div>
        </main>
    )
}