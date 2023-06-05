import {BrowserRouter} from 'react-router-dom'

//import components
import {AppRouter} from '../router'
import {GlobalProvider} from '../context'

import './App.css'

function App() {
  
  return (
  <GlobalProvider>
     <BrowserRouter>
     <AppRouter/>
     </BrowserRouter>
  </GlobalProvider>
  )
}

export default App
