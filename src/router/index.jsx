import {useRoutes} from 'react-router-dom'

//import pages
import {Home} from '../pages/Home'
import {DetailProduct} from '../pages/DetailProduct'

export const AppRouter = ()=>{
    let routes = useRoutes([
        {path:'/', element: <Home/>},
        {path:'/Details/:id', element: <DetailProduct/>},
        {path:'/Electronic', element:<Home/>},
        {path:'/shoes', element:<Home/>},
        {path:'/clothes', element:<Home/>},
        {path:'/cleaning', element:<Home/>}
    ])
    return routes
}