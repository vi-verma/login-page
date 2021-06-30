import { useState, useReducer } from "react";
import Card from "./Card";
import Button from "../Component/Button";
import classes from './Login.module.css';
import { TOKEN_KEY } from "../constants";

function Login(props){
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [emailIsValid, setEmilIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);
 
    const LoginHandeler = () => {
        if(userEmail.length == 0 || userEmail.includes("@") == false ){
            setEmilIsValid(false);
            console.log("working")
            return;
        }else{
            setEmilIsValid(true);
        }

        if(userPassword.length < 6){
            setPasswordIsValid(false);

            return;
        }else{
            setPasswordIsValid(true)
        }
        console.log("pass", userPassword)
        props.setIsLoggedIn(true)
        localStorage.setItem(TOKEN_KEY,"1");

    };

    const emailHandeler = (event) => {
        setUserEmail(event.target.value);
    };
    const passwordHandeler = (event) => {
        setUserPassword(event.target.value);
    };

    return(
        <Card>
            <div className={classes.user_login}>
                <div className={classes.email_cl}>
                    <label classes="form-label">User email:</label>
                    <input onChange={emailHandeler} type="text" className={"form-control "} style={{borderColor:emailIsValid ? 'grey' : "red"}}></input>
                </div>
                <div className={classes.password_cl}>
                    <label>Password:</label>
                    <input onChange={passwordHandeler} type="text" className="form-control" style={{borderColor:passwordIsValid ? "grey" : "red"}}></input>
                </div>
                <div>
                    <Button onClick={LoginHandeler} type="button" >Log In</Button>
                </div>
            </div>
        </Card>
    );
};

export default Login;