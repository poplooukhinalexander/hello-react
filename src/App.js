import React, { useEffect, useState }  from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { useSortedAndFilteredPosts } from './hooks/usePosts';
import PostService from './api/PostService';
import MyLoader from './components/UI/loader/MyLoader';
import { useFetch } from './hooks/useFetch';

function App() {  
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sortBy:"", searchBy:""})
  const [modalVisibility, setModalVisibility] = useState(false);
  const [fetchPosts, isPostLoading, postError] = useFetch(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisibility(false);
  }

  const removePost = (removedPost) => {
    setPosts(posts.filter(p => p.id !== removedPost.id));
  }


  useEffect(() => {
    fetchPosts();
  }, [])

  const sortedAndFilteredPosts = useSortedAndFilteredPosts(posts, filter.sortBy, filter.searchBy);

  return (  
    <div className="App">       
      <MyButton style={{marginTop: 30}} onClick={() => setModalVisibility(true)}>Create Post</MyButton>
      <MyModal visible={modalVisibility} setVisible={setModalVisibility}>
        <PostForm create={createPost}/>
      </MyModal>     
      <hr style={{marginTop: 5}}/>    
      <PostFilter filter={filter} setFilter={setFilter}/> 
      {
        postError && <h1 style={{display: 'flex', justifyContent: 'center'}}>Error: {postError}</h1>
      }
      {
        isPostLoading
        ? <div style={{display: 'flex', justifyContent: 'center'}}><MyLoader/></div>
        : <PostList remove={removePost} posts={sortedAndFilteredPosts} title="My favorite posts"/>      
      }             
    </div>    
  );
}

export default App;
