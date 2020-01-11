import React, { Component } from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions  from './actions';

import Header from './components/Header';
import HikingStats from './components/stats/HikingStats'
import RunningStats from './components/stats/RunningStats'
import ClimbingStats from './components/stats/ClimbingStats'
import Hiking from './components/topics/Hiking'
import Running from './components/topics/Running'
//import Climbing from './components/topics/Climbing'

class App extends Component {

  componentDidMount(){
    console.log('componentDidMount')
    this.props.fetchUser()
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  
  render() {
    
    return (

               
          <BrowserRouter>
            <div>
              <Header/>
              <Route path='/hikingStats' exact component={HikingStats}/>
                <Route path='/runningStats' exact component={RunningStats}/>
                <Route path='/climbingStats' exact component={ClimbingStats}/>
                <Route path='/hiking' exact component={Hiking}/>
                <Route path='/running' exact component={Running}/>
            </div>        
          </BrowserRouter>      
         
    );
  }
}
function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps,actions)(App);

