import React from "react";

const styles = {
    width: {
        width: "125px"
    }
};

function CharCard(props) {
    return (
        <div className="card" style={styles.width}>

            <span onClick={() => props.handleIncrement(props.id)}><img src={props.image} className="width card-img-top" alt="..." /></span>
  
        </div>
    );
}

export default CharCard;