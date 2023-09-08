import { useState } from 'react'
import { RouterApp } from './Router/RouterApp'

export const EcomerceApp = ()=> {
  const [count, setCount] = useState(0)

  return (
    <RouterApp/>
  )
}


