import React from 'react';
import { Link, Routes, Route} from "react-router-dom";
import Post from './pages/Post';
import About from './pages/About';
import './styles/App.css';
import Home from './pages/Home';


function App() {  
  return (  
   <div className='App'>
     <nav>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/posts">Posts</Link>
     </nav>
     <Routes>
        <Route path="/" element={<Home/>}/>                      
        <Route path="/about" element={<About/>}/>                  
        <Route path="/posts" element={<Post/>}/>        
     </Routes>
   </div>
  );
}

export default App;
