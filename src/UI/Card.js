import classes from "./Card.module.css";

function Card(props){

    return(
        <div className={props.className || "card"}>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
};

export default Card;