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
    setPosts([...posts, newPost]);
  }

  const removePost = (removedPost) => {
    setPosts(posts.filter(p => p.id !== removedPost.id));
  }

  return (  
    <div className="App"> 
      <PostForm create={createPost}/>
      {
        posts.length > 0
        ? <PostList remove={removePost} posts={posts} title="My favorite posts"/>      
        : <h1 style={{textAlign: 'center'}}>No posts!</h1>
      }      
    </div>    
  );
}

export default App;
