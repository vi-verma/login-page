// import classes from "./Button.module.css";

function Button(props){

    return(
        <div >
            <button className={props.classname || " "} type={props.type || "button"}>
                {props.children}
            </button>
        </div>
    );
};

export default Button;