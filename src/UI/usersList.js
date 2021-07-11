
import { useEffect, useState } from "react";
import classes from './usersList.module.css';
import Button from "../Component/Button";
import Card from './Card';


function UsersList(props){
    const [usersData, setUsersData] = useState([]);
    const [personalInfo, setPersonalInfo] = useState({})
    // console.log(personalInfo)
    useEffect(() => {
        fetch('http://localhost:3000/users/',{
            method:'GET',
            headers: {
                'Content-type':'application/json'
            },
            modes: "cors"
        }).then(response => {
            return response.json();
        }).then((Data) => {
            setUsersData(Data.data);
            // console.log(data)
        }).catch(error => {
            alert(error)
            // console.log(error)
        })
    },[]);
    // console.log('ulist', usersData)

    const userInfoHandeler = (uid) => {
        // console.log(uid)
        fetch(`http://localhost:3000/users/${uid}`,{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            },
            modes:"cors"
        }).then((response) => {
            return response.json();
        }).then(Data => {
            setPersonalInfo(Data.data)
            // console.log(Data.data)
        }).catch((err) => {
            alert(err)
        })
    };

    const deleteUserHandeler = async (user) =>{
        console.log(user.userId)
        try{
            const response = await fetch(`http://localhost:3000/users/${user.userId}}`, {
                method: "DELETE",
                headers:{
                    'Content-type': "application/json",
                    token: localStorage.token,
                },
                mode:"cors",
            });
            try{
                const data = await response.json();
                
                // console.log(user)
                // console.log("del ", user)
                const x = usersData.filter((y) => y.userId !== user.userId)
                // console.log("filter", x)
                setUsersData([...x])
                alert(data.msg);

            }catch(error){
                alert(error.msg)
            }

        }catch(err){
            alert(err.msg)
        }
    };

        // const userInfoHandeler = async() => {
        //     try {
        //         const response = await fetch(`http://localhost:3000/users/${uid}`, {
        //             method:"GET",
        //             headers:{
        //                 "Content-type": "application/json"
        //             },
        //             mode: "cors"
        //         });
        //         try{
        //             const Data = await response.json();
        //             setPersonalInfo(Data.data)
        //             console.log(Data)
        //         } catch (error) {
        //             console.log("JSON err", error);
        //         }
        //     };
        // };

        // const userInfoHandeler = (user) => {
        //    console.log("info hand", user); 
        //    setPersonalInfo(user);
        // };

        const users = usersData.map((user) => {
            return(
                <li  key={Math.random()} className={classes.user_li}>
                    {user.firstName+" "+user.lastName}
                    <p>
                        <Button className={classes.btn_cls_m} onClick={() => userInfoHandeler(user.userId)}>
                            Detail
                        </Button>
                        <p>
                        <Button className={classes.bb} onClick={() => deleteUserHandeler(user)} >
                            Del
                        </Button>
                        </p>
                        </p>
                </li>
            );
        });
        // Event bubbling and event Capture
        return(
        <div className="row">
            <div className='col-sm-4'>
                <Card>
                <h2>Users List</h2>
                <ul>
                    {users}
                </ul>
            </Card>
            </div>
            <div className='col-sm-7'>
                <Card>
                <ul className={classes.unorder}>
                    <h3>{personalInfo.firstName}'s information</h3>
                    <li>{"Name : "+ personalInfo.firstName +" " +personalInfo.lastName}</li>
                    <li>{"Id : "+personalInfo.userId}</li>
                    <li>{"Phone : "+ personalInfo.phone}</li>
                    <li>{"City : "+ personalInfo.city}</li>
                    <li>{"State : "+personalInfo.state}</li>
                    <li>{"Country : "+personalInfo.country}</li>
                    <li>{"PIN : "+personalInfo.piCode}</li>
                </ul>    
            </Card>    
            </div>
        </div>
        
    );
};

export default UsersList;