import { useState } from 'react'
import tabIcon from './assets/tabicon.svg'
import blueLogo from './assets/bLuELogo.svg'
import { ToolContainer } from './components/Tool'
import './tools.css'

function App() {
  return (
      <section id="top">
        <div className="header">
          <h1>
            <img src={blueLogo} 
            className="base" width="70" height="70" 
            alt=""
            style={{ marginRight: '20px', verticalAlign: 'middle', filter: 'drop-shadow(3px 3px 1px #000000'}}
            />
            bLuE's CS2ools
            <img src={tabIcon} 
            className="base" width="50" height="50" 
            alt=""
            style={{ marginLeft: '30px', verticalAlign: 'middle', filter: 'drop-shadow(3px 3px 1px #000000'}}
            />
          </h1>
        </div>
        <ToolContainer /> 
      </section>
  )
}

export default App
