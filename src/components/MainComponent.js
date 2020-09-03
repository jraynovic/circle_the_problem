import React, { Component } from 'react';
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';
import FormsComponent from './FormsComponent';
import QuestionComponent from './QuestionComponent'
import {Switch, Route, Redirect } from 'react-router-dom';
import FooterComponent from './FooterComponent';


class App extends Component {


  render() {
      const QuestionType = ({match}) =>{
        return(
          <QuestionComponent
          noise = {match.params}
          />
        )
      }
      return (
         <div>
        <Switch>
          <Route path="/home" component= {HomeComponent} />
          <Route exact path="/contact" component ={ContactComponent} />
          <Route exact path='/forms' component={FormsComponent}/>
          <Route path='/forms/:noiseType' component={QuestionType}/>
          <Redirect to='/home' />
        </Switch>
        <FooterComponent/>
        </div> 
      );
  }
}

export default App;

