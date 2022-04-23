import React, { useState, useEffect} from "react";
import PostService from '../api/PostService';
import { useFetch } from "../hooks/useFetch";
import Comment from "../components/Comment";
import { useNavigate, useParams } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";

const PostDetails = () => {
    const {id} = useParams();    
    const navigate = useNavigate();

    const [fetchComments, isLoading, error] = useFetch(async () => {
        const response = await PostService.getComments(id);  
        setComments(response.data);
    });

    useEffect(() => {
        fetchComments();
    }, [comments]);

    const [comments, setComments] = useState([]);

    if (!comments.length) {
        return (
            <h1 style={{textAlign: 'center'}}>No Comments!</h1>
        );
    }
      
    return (
    <div>
        <h1 style={{textAlign:'center'}}>Comments</h1>
        {
            error && <h1 style={{display: 'flex', justifyContent: 'center'}}>Error: {error}</h1>
        }
        {          
            comments.map((item, index) => <Comment key={item.id} number={index + 1} comment={item}/>)
        }

        <MyButton onClick={() => navigate(-1)} style={{marginTop:15}}>Back</MyButton>

    </div>);    
}

export default PostDetails;