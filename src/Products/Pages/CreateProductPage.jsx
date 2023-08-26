import { CreateProductForm } from "../Components/CreateProductForm"



export const CreateProductPage = ()=>{
    return (
     <div className="flex flex-col gap-3 ml-5 mr-5">
     <h1> Crear producto </h1>
     <CreateProductForm/>
     </div>   
    )
}