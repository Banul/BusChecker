import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import MapContainer from './MapContainer';
import Autocomplete from 'react-google-autocomplete';
// import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
// import withScriptjs from "react-google-maps/lib/withScriptjs";


  
   const renderMenu = () => {

    // const myMap = withScriptjs(withGoogleMap((props) => (<GoogleMap />)));


       return(
         <Menu >
            <p> Podaj numer autobusu/tramwaju : </p>
            <input/>
            <button type="button" className="btn btn-success button">Akceptuj</button>
            <button type="button" className="btn btn-danger button">Anuluj</button>
            <p> Podaj interesujące Cię miejsce: </p>
            <button className="btn btn-success buttonChangeLocation"> Zmień lokacje </button>
            {/* <Autocomplete/> */}
         </Menu>
       )
   }

// export default withScriptjs(renderMenu);

export default renderMenu;
