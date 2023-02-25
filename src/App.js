import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Blog from './components/Blog';
import Introduction from './components/Introduction';
import Experience from './components/Experience';

export default function App() {
   
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar></Sidebar>
                    <div id="colorlib-main">

                        <Introduction />
                        <About></About>
                        <Experience />
                       
                        
                    </div>
                </div>
            </div>
        );
    
}

