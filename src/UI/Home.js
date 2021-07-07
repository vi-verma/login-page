import Card from "./Card";
import classes from "./Home.module.css";
import UsersList from "./usersList";

function Home(){

    return(
        <Card>
            <p className={classes.home}>You are logged in</p>
            <UsersList/>
        </Card>
    );
};
export default Home;