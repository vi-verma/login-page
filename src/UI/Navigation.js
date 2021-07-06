import Button from "../Component/Button";
// import classes from "./Navigation.module.css";

function Navigation (props){

    const LogoutHandeler = () => {
        props.setIsLoggedIn(false);
        localStorage.removeItem("token")
        // localStorage.removeItem("Loginid")
    };

    return(
        <div className="container-fluid">
            <nav className="navbar navbar-dark bg-dark">
                <form className="form-inline">
                    <Button className="btn btn-outline-success" type="button">
                        Help
                    </Button>
                    {
                      props.isLoggedIn &&  
                     <Button onClick={LogoutHandeler} className="btn btn-outline-danger" type="button">
                     logout
                    </Button>       
                    }
                    
                </form>
            </nav>
        </div>
    );
};
export default Navigation;