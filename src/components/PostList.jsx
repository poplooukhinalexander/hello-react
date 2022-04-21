import React from 'react';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

const PostList = ({posts, title, remove, pageNum}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>No posts!</h1>
        );
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup>
            {
                posts.map((postItem, index) => 
                    <CSSTransition key={postItem.id} timeout={500} classNames="post">
                        <PostItem number={postItem.id} remove={remove} post={postItem} key={postItem.id} pageNum={pageNum} />
                    </CSSTransition>)
            }
            </TransitionGroup>            
        </div>
    );
}

export default PostList;