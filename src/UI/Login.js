import {useState} from "react";
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

        fetch("http://localhost:3000/auth/login", {  
            method: "POST",
            body: JSON.stringify({userId:userEmail, password:userPassword}),
            headers: {
                'Content-Type': 'application/json',
                // 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhQGdtYWlsLmNvbSIsImlhdCI6MTYyNTQ4NDMwMiwiZXhwIjoxNjI1NDg1MjAyfQ.oJTx2R_ZwAc0sKew0TasuYba-HQ4O_7G8CLwLsRKZQ0'
            },
            mode: "cors"
        }).then((response) => {
            return response.json()
        })
        .then(data => {
            // console.log(data.token)
            if(data.token){
                localStorage.setItem(TOKEN_KEY, data.token)
                props.setIsLoggedIn(true)
                return;
            }else{
                alert("invalid email or password")  
            }
        }).catch((error) => {
            alert(error)
        })

        if(userEmail.length === undefined || userEmail.includes("@") === false ){
            setEmilIsValid(false);
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
        // console.log("pass", userPassword)
        
        // localStorage.setItem(TOKEN_KEY,"1");

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