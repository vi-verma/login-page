import Button from "../Component/Button";

function Navigation (){

    return(
        <div className="container-fluid">
            <nav className="navbar navbar-dark bg-dark">
                <form className="form-inline">
                    <Button className={"btn btn-outline-success"}>
                        Help
                    </Button>
                    <Button className={"btn btn-outline-danger"}>
                        logout
                    </Button>
                </form>
            </nav>
        </div>
    );
};
export default Navigation;