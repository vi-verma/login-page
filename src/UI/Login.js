// import { useState, useReducer } from "react";
import Card from "./Card";
import Button from "../Component/Button";
import classes from './Login.module.css';

function Login(props){

    const LoginHandeler = () => {
        props.setIsLoggedIn(true)
        localStorage.setItem("Loginid:","1");
    };
    

    return(
        <Card>
            <div className={classes.user_login}>
                <div className={classes.email_cl}>
                    <label classes="form-label">User email:</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div className={classes.password_cl}>
                    <label>Password:</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div>
                    <Button onClick={LoginHandeler} type="button" >Log In</Button>
                </div>
            </div>
        </Card>
    );
};

export default Login;