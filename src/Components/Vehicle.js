import React from 'react';

const Vehicle = (props) => {
    console.log("props");
        console.log(props);

    return (
        <div className = "card" onClick = {props.vehicleItemClicked}>
              {props.number}
        </div>
    )
}

export default Vehicle;