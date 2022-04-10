import React, { useState }  from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { useSortedAndFilteredPosts } from './hooks/usePosts';

function App() {  
  const [posts, setPosts] = useState([
    { id: 1, title: "C# Tutorial", body: "Start learn C#" },
    { id: 2, title: "JS for beginner", body: "Easy entrance to JavaScript" },
    { id: 3, title: "React tutorial", body: "Learn Rect and Redux" }
  ]);

  const [filter, setFilter] = useState({sortBy:"", searchBy:""})
  const [modalVisibility, setModalVisibility] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisibility(false);
  }

  const removePost = (removedPost) => {
    setPosts(posts.filter(p => p.id !== removedPost.id));
  }

  const sortedAndFilteredPosts = useSortedAndFilteredPosts(posts, filter.sortBy, filter.searchBy);

  return (  
    <div className="App"> 
      <MyButton style={{marginTop: 30}} onClick={() => setModalVisibility(true)}>Create Post</MyButton>
      <MyModal visible={modalVisibility} setVisible={setModalVisibility}>
        <PostForm create={createPost}/>
      </MyModal>     
      <hr style={{marginTop: 5}}/>    
      <PostFilter filter={filter} setFilter={setFilter}/>        
      <PostList remove={removePost} posts={sortedAndFilteredPosts} title="My favorite posts"/>      
    </div>    
  );
}

export default App;
