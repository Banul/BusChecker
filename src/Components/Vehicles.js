import React from 'react';
import Vehicle from './Vehicle';

const Vehicles = (props) => {


if (props.vehicles.length !== 0){
    return (
        props.vehicles.map((vehicle) => {
            return <Vehicle number = {vehicle} key = {vehicle} vehicleItemClicked = {props.itemClicked} vehicleItemChecked = {props.itemChecked}/> 
        }
    )
    )
}
else{
    return <div> </div>
}
}

export default Vehicles;