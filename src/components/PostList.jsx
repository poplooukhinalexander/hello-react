import React, { useState } from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <div>
            {
                posts.map((postItem, index) => <PostItem number={index + 1} remove={remove} post={postItem} key={postItem.id} />)
            }
            </div>
        </div>
    );
}

export default PostList;