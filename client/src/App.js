import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from './auth/components/login'
import Register from './auth/components/register'
import Landing from './landing/components/landing'
import Feed from './feed/components/feed'
import Profile from './profile/components/profile'
import AddRecipe from './profile/components/addRecipe'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/cookbook' component={Feed}/>
        <Route path='/profile/:username' render={props => {
          const { username } = props.match.params
          return (<Profile username={username}/>)
        }}/>
        <Route path='/addRecipe' component={AddRecipe}/>
      </div>
    );
  }
}

export default App;
