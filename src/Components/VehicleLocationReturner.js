import React from "react";
import axios from 'axios';


const vehicleLocationReturner = (props) => {
     let resolved = new Array();
      const URL = "https://cors-anywhere.herokuapp.com/http://api.um.warszawa.pl/api/action/busestrams_get/?resource_id=%20f2e5503e-%20927d-4ad3-9500-4ab9e55deb59&apikey=0f3b3264-6613-4b0b-9f88-c7f84f770563&type=1&line="

      let readableStream =  props.map(vehicleNumber => fetch(`${URL}${vehicleNumber}`).then(results => {
            let result = results.json();
            resolved.push(result);
        }
        ));

    return(
        resolved    
    );
}

export default vehicleLocationReturner;


    