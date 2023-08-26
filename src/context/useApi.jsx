import {useEffect,useState} from 'react'


export const useApi = ()=>{
    const url = 'http://192.168.0.24:3000/api/v1'

    //all products
    const [items,setItems] = useState([])
    const [item,setItem] = useState({})

    useEffect(()=>{
        fetch(`${url}/Product`)
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

   const findOneProduct = (id)=>{
    useEffect(()=>{
        fetch(`${url}/Product/${id}`)
        .then(res => res.json())
        .then(data => setItem(data.response))
    }, [id])
   }

    
    return {items,item,findOneProduct}

}