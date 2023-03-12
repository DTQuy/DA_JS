import logo from './logo.svg';
import Header from './components/layout/Header'
import Category from './components/layout/Category'
import ListProduct from './components/layout/Listproduct'
import Footer from './components/layout/Footer'

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register'

function App() {
  return (
    
     <Router>
     <div className="App">
     <Header/>
     <Route  path="/login" component={Login} /> 
      <Route  path="/register" component={Register} />
     <Category/>
     <ListProduct/>
     <Footer/>
     </div>
   </Router>
  );
}

export default App;
