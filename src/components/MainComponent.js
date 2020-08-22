import React, { Component } from 'react';
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';
import FormsComponent from './FormsComponent';
import {Switch, Route, Redirect } from 'react-router-dom';
import FooterComponent from './FooterComponent';

class App extends Component {


  render() {
      return (
         <div>
        <Switch>
          <Route path="/home" component= {HomeComponent} />
          <Route exact path="/contact" component ={ContactComponent} />
          <Route exact path='/forms' component={FormsComponent}/>
          <Redirect to='/home' />
        </Switch>
        <FooterComponent/>
        </div> 
      );
  }
}

export default App;

