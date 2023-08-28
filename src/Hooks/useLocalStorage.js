import { useState } from "react"


export const useLocalStorage = ( initialValue , storageName )=>{
    const [item,setItem] = useState([])

    let parsedItem;
     
    const localStorageItem = localStorage.getItem(storageName)
    if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue))
        parsedItem = initialValue
    }
    else{
        parsedItem = JSON.parse(localStorageItem)
    } 

    setItem(parsedItem)

      

    const changeItembyId = (newItem)=>{

        localStorage.setItem(itemName,JSON.stringify(newItem))
        
        setItem(newItem)
    }

    return {changeItembyId, item}
}