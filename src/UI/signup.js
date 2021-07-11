import Card from "./Card";
import {useEffect, useState} from 'react';
import Button from '../Component/Button';

function SignUp(){
    const [signUpInfo, setSignUpInfo] = useState({});


    const SignUpFetch = async () =>{
        try{
            // console.log("fetch")
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
                console.log("t dta",data);
            }catch(err){
                console.log("c1 e",err);
            }
        }
        catch(error){
            alert("c2 e",error)
        }
    };
    const signupHandeler = () =>{
        SignUpFetch();
    };

    const idHandeler = (e) => {
        console.log("as")
       setSignUpInfo({...signUpInfo, id:e.target.value}) 
    };
    const passwordHandeler = (e) => {
        setSignUpInfo({...signUpInfo, password:e.target.value}) 
    };
    const fnameHandeler = (e) => {
        setSignUpInfo({...signUpInfo, fname:e.target.value}) 
    };
    const lnameHandeler = (e) => {
        setSignUpInfo({...signUpInfo, lname:e.target.value}) 
    };
    const stateHandeler = (e) => {
        setSignUpInfo({...signUpInfo, state:e.target.value}) 
    };
    const countryHandeler = (e) => {
        setSignUpInfo({...signUpInfo, country:e.target.value}) 
    };
    const cityHandeler = (e) => {
        setSignUpInfo({...signUpInfo, city:e.target.value}) 
    };
    const pinCodeHandeler = (e) => {
        setSignUpInfo({...signUpInfo, pincode:e.target.value})  
    };
    


    return(
        <Card>
            <div className='row'>
            <label className='form-label'>User Id</label>
            <input className='form-control col-sm-6' onChange={idHandeler} type="text" ></input>
            <label className='form-label '>Password</label>
            <input className='form-control col-sm-6' onChange={passwordHandeler} type="text" ></input>
            <label className='form-label'>First Name</label>
            <input className='form-control col-sm-6' onChange={fnameHandeler} type="text" ></input>
            <label className='form-label'>lastName</label>
            <input className='form-control col-sm-6' onChange={lnameHandeler} type="text" ></input>
            <label className='form-label'>State</label>
            <input className='form-control col-sm-6' onChange={stateHandeler} type="text" ></input>
            <label className='form-label'>Country</label>
            <input className='form-control col-sm-6' onChange={countryHandeler} type="text" ></input>
            <label className='form-label'>City</label>
            <input className='form-control col-sm-6' onChange={cityHandeler} type="text" ></input>
            <label className='form-label'>Pin Code</label>
            <input className='form-control col-sm-6' onChange={pinCodeHandeler} type="number" ></input>
            <Button onClick={signupHandeler}>Create User</Button>
            </div>
        </Card>
    );
};

export default SignUp;