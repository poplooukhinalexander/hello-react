import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
    let navigate = useNavigate();
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}.{props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>   
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)}>Remove</MyButton>
                <MyButton onClick={() => navigate(`/post/${props.post.id}`)} className="post__btns">Open</MyButton>
            </div>     
        </div>
    );
}

export default PostItem;