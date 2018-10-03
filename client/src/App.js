import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from './auth/components/login'
import Register from './auth/components/register'
import Landing from './landing/components/landing'
import Home from './home/home'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/cookbook' component={Home}/>
      </div>
    );
  }
}

export default App;
