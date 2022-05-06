import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import {FootballMatchesData} from './components/FootballMatchesData';

const title = "Football Comptetions";

export default function App(){
  return(
    <div>
    <nav className="app-header layout-row align-items-center justify-content-center">
      <div className="layout-row align-items-center">
        <img alt="" src={logo} className="logo"/>
        <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
      </div>
    </nav>
    <FootballMatchesData/>
  </div>
  )
}
