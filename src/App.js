import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {  
  const [posts, setPosts] = useState([
    { id: 1, title: "C# Tutorial", body: "Start learn C#" },
    { id: 2, title: "JS for beginner", body: "Easy entrance to JavaScript" },
    { id: 3, title: "Rect tutorial", body: "Learn Rect and Redux" }
  ]);

  const createPost = (newPost) => {
    setPosts(newPost);
  }

  return (  
    <div className="App"> 
      <PostForm create={createPost}/>
      <PostList posts={posts} title="My favorite posts"/>      
    </div>    
  );
}

export default App;
