import React, {useState} from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Post from './pages/Post';
import About from './pages/About';
import './styles/App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PostDetails from './pages/PostDetails';
import Login from './pages/Login';
import { AuthContext } from './auth/AuthContext';
import RequireAuth from './auth/RequireAuth';


function App() {  
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  return (  
    <AuthContext.Provider value = {{
      isAuthorized,
      setIsAuthorized
    }}>
      <div className='App'>
        <nav>
          <Link className='nav-item' to="/">Home</Link>
          <Link className='nav-item' to="/about">About</Link>
          <Link className='nav-item' to="/posts">Posts</Link>
          <Link className='nav-item' to="/login">Login</Link>
        </nav>     
      <Routes>           
        <Route path="/" element={<Home/>}/>                      
        <Route path="/about" element={<About/>}/>                      
        <Route path="/posts" element={<RequireAuth><Post/></RequireAuth>}/>    
        <Route path="/posts/:id" element={<RequireAuth><PostDetails/></RequireAuth>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>    
      </Routes>     
    </div>
   </AuthContext.Provider>
  );
}

export default App;
