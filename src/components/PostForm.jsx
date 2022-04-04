import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = (props) => {

    const [post, setPost] = useState({title: "", body: ""});
    const addNewPost = (e) => {
        e.preventDefault();    
        const newPost = {...post, id: Date.now()};
        props.create(newPost);            
        setPost({title: "", body: ""});  
    }

    return(
        <form>            
            <MyInput type="text" placeholder="Enter Title" value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            <MyInput type="text" placeholder="Enter Body" value={post.body} onChange={e => setPost({...post, body: e.target.value})}/>
            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
    );
}

export default PostForm;