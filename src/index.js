import './index.css'
import App from './App'
import React from 'react'
import  ReactDOM  from 'react-dom/client'

import { store } from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* from provider you tell react components about store */}
      <App />
    </Provider>
  </React.StrictMode>
);