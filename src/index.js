import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './App'
import { AdminFlagProvider } from './components/providers/AdminFlagProvider'

ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById('root')
)
