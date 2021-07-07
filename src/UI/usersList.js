import { useEffect, useState } from "react";
import classes from './usersList.module.css';

function UsersList(){
    const [usersData, setUsersData] = useState([]);
    
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

    const userInfoHandeler = (user) => {
       console.log("info hand", user); 
    };

    const users = usersData.map((user) => {
        return(
            <li className={classes.user_li} onClick={() => userInfoHandeler(user)}>
                {user.firstName+" "+user.lastName}
            </li>
        );
    });

    return(
        <div className="row">
            <div className='col-sm-3'>
                <h2>Users List</h2>
                <ul>
                    {users}
                </ul>
            </div>
            <div className='col-sm-6'>
                    user info
            </div>    
        </div>
        
    );
};

export default UsersList;