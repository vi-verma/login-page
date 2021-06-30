import Card from "./Card";
import classes from "./Home.module.css";

function Home(){

    return(
        <Card>
            <p className={classes.home}>You are logged in</p>
        </Card>
    );
};
export default Home;