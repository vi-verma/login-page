import Card from "./Card";
import {useState, useReducer} from 'react';
import Button from '../Component/Button';

const idReducer = (state, action) => {
    if(action.type === "USER_ID"){
        return {value: action.val, isIdVal:action.val.includes("@") || action.val.length > 5}
    }
    return {value: "", isIdVal:true}
};

function SignUp(){
    const [signUpInfo, setSignUpInfo] = useState({});

    // const[isIdValid, setIsIdValid] = useState(true);
    const[isPasswordValid, setIsPasswordValid] = useState(true);
    const[isFnameValid, setIsFnameValid] = useState(true);
    const[isLnameValid, setIsLnameValid] = useState(true);
    const[isStateValid, setIsStateValid] = useState(true);
    const[isCountryValid, setIsCountryValid] = useState(true);
    const[isCityValid, setIsCityValid] = useState(true);
    const[isPinValid, setIsPinValid] = useState(true);

    const [idState, dispatchId] = useReducer(idReducer, {value: '', isIdVal: true})


    const SignUpFetch = async () =>{
        try{
            // console.log("fetch")
            const response = await fetch("http://localhost:3000/users/",{
                method:"POST",
                body: JSON.stringify({
                    userId:signUpInfo.id,
                    password:signUpInfo.password,
                    firstName:signUpInfo.fname, 
                    lastName:signUpInfo.lname,
                    state:signUpInfo.state, 
                    country:signUpInfo.country, 
                    city: signUpInfo.city, 
                    pinCode: signUpInfo.pincode
                }),
                headers:{
                    'Content-type':"application/json"
                },
                mode:'cors'
            });
            try{
                const data = await response.json();
                alert(data.msg);
            }catch(err){
                alert("c1 e",err);
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
        dispatchId({type: "USER_ID", val: e.target.value})
        // setSignUpInfo({...signUpInfo, id:e.target.value})
        
        // setIsIdValid(
        //     idState.value.length > 5 || idState.isIdVal
        // )
    };   
    // const idHandeler = (e) => {
    //     // console.log(signUpInfo.id.includes("@"))
    //     if(idState.value === '' || idState.isIdVal){
    //         setIsIdValid(false);
    //         return;
    //     }else{
    //         setIsIdValid(true);
    //         setSignUpInfo({...signUpInfo, id:e.target.value})
    //     }
    // };
    const passwordHandeler = (e) => {
        if(e.target.value === '' || e.target.value.length < 5){
            setIsPasswordValid(false);
            return;
        }else{
            setSignUpInfo({...signUpInfo, password:e.target.value}) 
            setIsPasswordValid(true);
        }
    };
    const fnameHandeler = (e) => {
        if(e.target.value === '' || e.target.value.length < 3){
            setIsFnameValid(false);
            return;
        }else{
            setSignUpInfo({...signUpInfo, fname:e.target.value}); 
            setIsFnameValid(true);
        }
    };
    const lnameHandeler = (e) => {
        if(e.target.value === '' || e.target.value.length < 3){
            setIsLnameValid(false);
            return;
        }else{
            setSignUpInfo({...signUpInfo, lname:e.target.value}); 
            setIsLnameValid(true);
        }
    };
    const stateHandeler = (e) => {
        if(e.target.value === '' || e.target.value.length < 3){
            setIsStateValid(false);
            return;
        }else{
            setSignUpInfo({...signUpInfo, state:e.target.value}); 
            setIsStateValid(true);
        }
    };
    const countryHandeler = (e) => {
        if(e.target.value === '' || e.target.value.length < 4){
            setIsCountryValid(false);
            return;
        }else{
            setSignUpInfo({...signUpInfo, country:e.target.value}) 
            setIsCountryValid(true);
        }
        
    };
    const cityHandeler = (e) => {
        if(e.target.value === '' || e.target.value.length < 4){
            setIsCityValid(false);
            return;
        }else{
            setSignUpInfo({...signUpInfo, city:e.target.value})
            setIsCityValid(true);
        }
        
    };
    const pinCodeHandeler = (e) => {
        if(e.target.value === '' || e.target.value.length === 6){
            setIsPinValid(false);
            return;
        }else{
            setSignUpInfo({...signUpInfo, pincode:e.target.value})
            setIsPinValid(true);
        }
         
    };
    


    return(
        <Card>
            <div className='row'>
                <div className="col-sm-6">
                    <label className="col-sm-3">User Id :</label>
                    <input style={{borderColor: idState.isIdVal ? "grey" : "red"}} value= {idState.value} className='col-sm-8' onChange={idHandeler} type="text" ></input> 
                </div>
                <div className="col-sm-6">
                    <label className="col-sm-3" >Password :</label>
                    <input style={{borderColor: isPasswordValid ? "grey" : "red"}} className="col-sm-8" onChange={passwordHandeler} type="password" ></input>
                </div>
                <div className="col-sm-6">
                    <label className="col-sm-3">First Name :</label>
                    <input style={{borderColor: isFnameValid ? "grey" : "red"}} className='col-sm-8' onChange={fnameHandeler} type="text" ></input>
                </div>
                <div className="col-sm-6">
                    <label className="col-sm-3">Last Name :</label>
                    <input style={{borderColor: isLnameValid ? "grey" : "red"}} className='col-sm-8' onChange={lnameHandeler} type="text" ></input>
                </div>
                <div className="col-sm-6">
                    <label className="col-sm-3">State :</label>
                    <input style={{borderColor: isStateValid ? "grey" : "red"}} className='col-sm-8' onChange={stateHandeler} type="text" ></input>
                </div>
                <div className="col-sm-6">
                    <label className="col-sm-3">Country :</label>
                    <input style={{borderColor: isCountryValid ? "grey" : "red"}} className='col-sm-8' onChange={countryHandeler} type="text" ></input>
                </div>
                <div className="col-sm-6">  
                    <label className="col-sm-3">City :</label>
                    <input style={{borderColor: isCityValid ? "grey" : "red"}} className='col-sm-8' onChange={cityHandeler} type="text" ></input>
                </div>
                <div className="col-sm-6">
                    <label className="col-sm-3">Pin Code :</label>
                    <input style={{borderColor: isPinValid ? "grey" : "red"}} className='col-sm-8' onChange={pinCodeHandeler} type="number" ></input>
                </div>
                <div className="col-sm-12">
                    <Button onClick={signupHandeler}>Create User :</Button>
                </div>
            </div>
        </Card>
    );
};

export default SignUp;