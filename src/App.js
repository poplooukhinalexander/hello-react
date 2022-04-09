import React, { useMemo, useState }  from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {  
  const [posts, setPosts] = useState([
    { id: 1, title: "C# Tutorial", body: "Start learn C#" },
    { id: 2, title: "JS for beginner", body: "Easy entrance to JavaScript" },
    { id: 3, title: "React tutorial", body: "Learn Rect and Redux" }
  ]);

  const [filter, setFilter] = useState({sortBy:"", searchBy:""})

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (removedPost) => {
    setPosts(posts.filter(p => p.id !== removedPost.id));
  }

  const sortedPosts = useMemo(() => {
    console.log(`Sort by ${filter.sortBy}`);
    if (filter.sortBy)
      return [...posts].sort((a, b) => a[filter.sortBy].localeCompare(b[filter.sortBy]));
    return posts;
  }, [filter.sortBy, posts]);

  const sortedAndFilteredPosts = useMemo(() => {
    console.log(`Search by ${filter.searchBy}`);
    if (filter.searchBy)
      return sortedPosts.filter(p => 
        p.title.toLowerCase().includes(filter.searchBy.toLowerCase()) 
          || p.body.toLowerCase().includes(filter.searchBy.toLowerCase()));
    return sortedPosts;
  }, [filter.searchBy, sortedPosts]);

  return (  
    <div className="App"> 
      <PostForm create={createPost}/>
      <hr/>    
      <PostFilter filter={filter} setFilter={setFilter}/>        
      {
        sortedAndFilteredPosts.length > 0
        ? <PostList remove={removePost} posts={sortedAndFilteredPosts} title="My favorite posts"/>      
        : <h1 style={{textAlign: 'center'}}>No posts!</h1>
      }      
    </div>    
  );
}

export default App;
