import React from 'react'
import ReactDOM from 'react-dom'
//react router
import {BrowserRouter} from 'react-router-dom'
// components
import App from './App'
import './index.css'

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
)
