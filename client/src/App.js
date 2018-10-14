import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from './auth/components/login'
import Register from './auth/components/register'
import Landing from './landing/components/landing'
import Feed from './feed/components/feed'
import Profile from './profile/components/profile'
import AddRecipe from './profile/components/addRecipe'
import NavBar from './navbar/components/navbar'

const styles = {
  appWrapper: {
    width: "100%",
    height: "100%",
    margin: "0"
  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.appWrapper}>
        <NavBar/>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/cookbook' component={Feed}/>
        <Route path='/profile/:username' render={props => {
          const { username } = props.match.params
          const { location } = props
          return (<Profile username={username} location={location}/>)
        }}/>
        <Route path='/addRecipe' component={AddRecipe}/>
      </div>
    );
  }
}

export default App;
