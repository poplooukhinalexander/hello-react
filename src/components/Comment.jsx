import React from "react";

const Comment = ({comment, number}) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}.{comment.name} from {comment.email}</strong>
                <div>{comment.body}</div>
            </div>                   
        </div>);
}

export default Comment;