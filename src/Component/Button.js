// import classes from "./Button.module.css";

function Button(props){

    return(
        <button onClick={props.onClick} className={props.className || "btn btn-primary"} type={props.type || "button"}>
            {props.children}
        </button>
    );
};

export default Button;