import React from 'react'
import './App.css'
import Home from './pages/Home'
import Startup from './pages/Startups'
import {Route, Switch} from 'react-router-dom'

const App = () => 
    <div className='container'>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/startup/:id" component={Startup} />
      </Switch>
    </div>

export default App