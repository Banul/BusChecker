import React from 'react';

const Vehicle = (props) => {
   
    const number = props.number;

    return (
        <div>
        <div className = "card" onClick = {() => props.vehicleItemClicked(number) }>
            {number}       
        </div>
        <input type = "checkbox" className="form-check-input" className = "checkbox" onChange = {() => props.vehicleItemChecked(number) }/>
        </div>
    )
}

export default Vehicle;