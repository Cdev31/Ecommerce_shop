import {BrowserRouter} from 'react-router-dom'

//import components

import {GlobalProvider} from '../../context'

import './App.css'
import { AppUi } from './AppUI'

function App() {

  return (
  <GlobalProvider>
     <BrowserRouter>
       <AppUi/>
     </BrowserRouter>
  </GlobalProvider>
  )
}

export default App
