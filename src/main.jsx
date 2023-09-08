import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { EcomerceApp } from './EcomerceApp.jsx'

import './style.css'
import { Layout } from './Common/Layout/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <EcomerceApp />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
