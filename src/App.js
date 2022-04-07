import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {  
  const [posts, setPosts] = useState([
    { id: 1, title: "C# Tutorial", body: "Start learn C#" },
    { id: 2, title: "JS for beginner", body: "Easy entrance to JavaScript" },
    { id: 3, title: "React tutorial", body: "Learn Rect and Redux" }
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchParam, setSearchParam] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (removedPost) => {
    setPosts(posts.filter(p => p.id !== removedPost.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  const searchPost = (searchParam) => {
    setSearchParam(searchParam);
    if(searchParam.length > 0)
      setPosts(posts.filter(p => p.title.includes(searchParam) || p.body.includes(searchParam)));
    else
      setPosts(posts);
  }

  return (  
    <div className="App"> 
      <PostForm create={createPost}/>
      <hr/>      
      <MyInput value={searchParam} onChange={e => searchPost(e.target.value)} placeholder="Search..." />
      <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultText="Sort by" 
        options={[{value: "title", text: "Title"}, {value: "body", text: "Body"}]}/>
      {
        posts.length > 0
        ? <PostList remove={removePost} posts={posts} title="My favorite posts"/>      
        : <h1 style={{textAlign: 'center'}}>No posts!</h1>
      }      
    </div>    
  );
}

export default App;
