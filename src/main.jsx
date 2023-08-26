import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { EcommerceApp } from './EcommerceApp'
import { store } from './Store/store'
import './style.css'
import { Layout } from './Common/Layout/Layout'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
        <EcommerceApp />
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
