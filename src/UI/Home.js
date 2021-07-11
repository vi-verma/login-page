import Card from "./Card";
import classes from "./Home.module.css";
import UsersList from "./usersList";

function Home(props){

    return(
        <Card>
            <p className={classes.home}>You are logged in</p>
            <UsersList setIsLoggedIn={props.setIsLoggedIn}/>
        </Card>
    );
};
export default Home;