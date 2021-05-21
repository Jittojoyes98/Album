import './App.css';
import React,{useEffect, useState} from "react"
import {BrowserRouter as Router} from "react-router-dom"
import axios from 'axios'
import { Route,Switch} from "react-router-dom"
import Home from "./Home"
import Albums from "./Album"
import Gallery from "./Gallery"
import Searchbar from "./Searchbar"



function App() {
  const [searchdata,setSearchdata]=useState(false);
  const [val,setVal]=useState()
  return (
    <div className="App">
      <Router>
        <Route exact path="/" >
          <div className="main">
            <h1>Check the Users here</h1>
            <Searchbar searchdata={searchdata} setSearchdata={setSearchdata} val={val} setVal={setVal} />
            <Home searchdata={searchdata} setSearchdata={setSearchdata} val={val}/>
          </div>
        </Route>
        <Route exact path="/users/:id/albums">
          <Albums searchdata={searchdata} setSearchdata={setSearchdata} /> 
        </Route>
        <Route exact path="/albums/:id/photos">
          <Gallery />
        </Route>
      </Router>
    </div>
    
  );
}

//  now this is great


export default App;
