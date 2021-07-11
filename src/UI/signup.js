import Card from "./Card";
import {useEffect, useState} from 'react';
import Button from '../Component/Button';

function SignUp(){
    const [signUpInfo, setSignUpInfo] = useState({});


    const SignUpFetch = async () =>{
        try{
            console.log("fetch")
            const response = await fetch("http://localhost:3000/users/",{
                method:"POST",
                body: JSON.stringify({userId:signUpInfo.id, password:signUpInfo.password,firstName:signUpInfo.fname, lastName:signUpInfo.lname,state:signUpInfo.state, country:signUpInfo.country, city: signUpInfo.city, pinCode: signUpInfo.pincode}),
                headers:{
                    'Content-type':"application/json"
                },
                mode:'cors'
            });
            try{
                const data = await response.json();
                console.log(data);
            }catch(err){
                console.log(err);
            }
        }
        catch(error){
            alert(error)
        }
    };
    const signupHandeler = () =>{
        SignUpFetch();
    };
        



    return(
        <Card>
            <div className='row'>
            <label className='form-label'>User Id</label>
            <input className='form-control col-sm-6' onChange={(e) => setSignUpInfo({...signUpInfo, id:e.target.value})} type="text" ></input>
            <label className='form-label '>Password</label>
            <input className='form-control col-sm-6' onChange={(e) => setSignUpInfo({...signUpInfo, password:e.target.value})} type="text" ></input>
            <label className='form-label'>First Name</label>
            <input className='form-control col-sm-6' onChange={(e) => setSignUpInfo({...signUpInfo, fname:e.target.value})} type="text" ></input>
            <label className='form-label'>lastName</label>
            <input className='form-control col-sm-6' onChange={(e) => setSignUpInfo({...signUpInfo, lname:e.target.value})} type="text" ></input>
            <label className='form-label'>State</label>
            <input className='form-control col-sm-6' onChange={(e) => setSignUpInfo({...signUpInfo, state:e.target.value})} type="text" ></input>
            <label className='form-label'>Country</label>
            <input className='form-control col-sm-6' onChange={(e) => setSignUpInfo({...signUpInfo, country:e.target.value})} type="text" ></input>
            <label className='form-label'>City</label>
            <input className='form-control col-sm-6' onChange={(e) => setSignUpInfo({...signUpInfo, city:e.target.value})} type="text" ></input>
            <label className='form-label'>Pin Code</label>
            <input className='form-control col-sm-6' onChange={(e) => setSignUpInfo({...signUpInfo, pincode:e.target.value})} type="number" ></input>
            <Button onClick={signupHandeler}>submit</Button>
            </div>
        </Card>
    );
};

export default SignUp;