import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { EcommerceApp } from './EcommerceApp'
import { store , persistor} from './Store/store'
import { Layout } from './Common/Layout/Layout'
import './style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Layout>
          <EcommerceApp />
          </Layout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
