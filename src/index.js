import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout'

//import "./css/styles.css";
//import './css/syle2.sass'

function App() {
  return <Layout />
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
