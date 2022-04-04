import React, { useState } from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{props.title}</h1>
            <div>
            {
                props.posts.map((postItem, index) => <PostItem number={index + 1} post={postItem} key={postItem.id} />)
            }
            </div>
        </div>
    );
}

export default PostList;