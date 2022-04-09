import React, { useState } from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>No posts!</h1>
        );
    }

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