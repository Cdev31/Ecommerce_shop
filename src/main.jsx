import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { EcomerceApp } from './EcomerceApp.jsx'
import './style.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <EcomerceApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
