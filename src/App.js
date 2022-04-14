import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Post from './pages/Post';
import About from './pages/About';
import './styles/App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function App() {  
  return (  
   <div className='App'>
     <nav>
       <Link className='nav-item' to="/">Home</Link>
       <Link className='nav-item' to="/about">About</Link>
       <Link className='nav-item' to="/posts">Posts</Link>
     </nav>     
    <Routes>
        <Route path="/" element={<Home/>}/>                      
        <Route path="/about" element={<About/>}/>                  
        <Route path="/posts" element={<Post/>}/>        
        <Route path="*" element={<NotFound/>}/>
    </Routes>     
   </div>
  );
}

export default App;
