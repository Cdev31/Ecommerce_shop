import { useEffect, useState } from "react"


const validatorByCategory = [
    {
        category: "Cleaning",
        campos: ["Size", "Date of Expiration", "Indications"]
    },
    {
        category: "Electronic",
        campos: ["Ram", "Processor", "Screen"]
    },
    {
        category: "Shoes",
        campos: ["Sizes", "Gender", "Age"]
    }
]

export const ProductByCategoryForm = ({category})=>{
    const [items, setItems] = useState([])

     useEffect(()=>{
        const index = validatorByCategory.findIndex((c)=> c.category === category)
        const newItems = validatorByCategory[index].campos
        setItems(newItems)
     }, [category])
     console.log(items)
    return (
        <form className=" flex flex-col gap-5">
            {
                items.map((campo,i)=>{
                    return (
                        <div key={i} className="flex gap-2">
                            <label className="font-semibold text-theme">{campo}:</label>
                            <input className="focus:outline-none border-b-2 border-theme" type="text" placeholder={campo}/>
                        </div>
                    )
                })
            }
        </form>
    )
}