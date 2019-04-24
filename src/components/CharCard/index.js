import React from "react";
import Counter from "../Counter";

const styles = {
    width: {
        width: "125px"
    }
};

function CharCard(props) {
    return (
        <div className="card" style={styles.width}>
            <img src={props.image} className="width card-img-top" alt="..." onClick={Counter.handleIncrement}/>
        </div>
    );
}

export default CharCard;