import React from 'react';
import Vehicle from './Vehicle';

const Vehicles = (props) => {
    
    console.log("nanan");
                  console.log(props.vehicles);

if (props.vehicles.length !== 0){
    return (
        props.vehicles.map((vehicle) => {
            return <Vehicle number = {vehicle} /> 
        }
    )
    )
}
else{
    return <div> </div>
}
}

export default Vehicles;