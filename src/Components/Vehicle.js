import React from 'react';

const Vehicle = (props) => {
   
    const number = props.number;

    return (
        <div className = "card" onClick = {() => props.vehicleItemClicked(number) }>
            {number}       
        </div>
    )
}

export default Vehicle;