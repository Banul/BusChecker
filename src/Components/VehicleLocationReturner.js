import React from "react";
import axios from 'axios';


const vehicleLocationReturner = (props) => {
    const URL = "https://api.um.warszawa.pl/api/action/busestrams_get/?resource_id=%20f2e5503e-%20927d-4ad3-9500-4ab9e55deb59&apikey=0f3b3264-6613-4b0b-9f88-c7f84f770563&type=1&line="

    return(
        props.map(vehicleNumber => axios.get(`${URL}${vehicleNumber}`))
    );
}

export default vehicleLocationReturner;