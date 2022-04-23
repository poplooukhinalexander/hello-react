import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

export default function Login()  {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from =  (location.state && location.state.from) || '/';
    const login = (ev) => {      
        ev.preventDefault();
        authContext.setIsAuthorized(true);      
        navigate(from, { replace: true });    
    }
    return(<div>
        <h1>Please, Login</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="type username"/>
            <MyInput type="password" placeholder="type password"/>
            <MyButton>Login</MyButton>
        </form>        
    </div>);
}