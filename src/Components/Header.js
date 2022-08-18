import React, { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Movies from './Services/movies';
import Series from "../Services/Series";
import Home from "../Services/Home";



class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <h1>Let's Movies</h1>
                <nav>
                    <ul>
                        <li>
                            <link to='/'>Home</link>
                        </li>
                        <li>
                            <link to='/movies'>Movies</link>
                        </li>
                        <li>
                            <link to='/Series'>Series</link>
                        </li>
                        
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/Series" element={<Series />} />
                </Routes>
            </BrowserRouter>
        )
    }
}