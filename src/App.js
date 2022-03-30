/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Covid from './components/Covid';
import Countdown from './components/Countdown';
import Todolist from './components/Todolist';
import Blog from './components/Blog';
import DetailBlog from './components/DetailBlog';
import Addnewblog from './components/Addnewblog';
import Notfound from './components/Notfound';
import Youtube from './components/Youtube';

function App() {

  useEffect(() => {

  }, []) //cái này để tối ưu hoá hàm useEffect

  //re-render
  return (

    <div className="App">

      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Covid />} />
            <Route path="/countdown" element={<Countdown />} />
            <Route path="/todo" element={<Todolist />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<DetailBlog />} />
            {/* :id là tham số động, : là bắt đầu của tham số, id là tên biến đc đặt */}
            <Route path="/addnewblog" element={<Addnewblog />} />
            <Route path="/ytb" element={<Youtube />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;