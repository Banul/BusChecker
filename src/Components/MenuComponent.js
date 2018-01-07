import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import MapContainer from './MapContainer';
import Autocomplete from 'react-google-autocomplete';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map";




  
   const renderMenu = () => {

       return(
         <Menu >
          
            <p> Podaj numer autobusu/tramwaju : </p>
            <input/>
            <button type="button" className="btn btn-success button">Akceptuj</button>
            <button type="button" className="btn btn-danger button">Anuluj</button>
            <p> Podaj interesujące Cię miejsce: </p>
            <button className="btn btn-success buttonChangeLocation"> Zmień lokacje </button>

            <ReactGoogleMapLoader
    params={{
        key: 'AIzaSyCq-GMlFPxSi4Hlw6-8pttvoPb8WFLoON4', // Define your api key here
        libraries: "places, geometry", // To request multiple libraries, separate them with a comma
    }}
    render={googleMaps =>
        googleMaps && (
         <div>
           <Autocomplete/>
            <ReactGoogleMap 
                  googleMaps={googleMaps}
                  center={{lat: 43.604363, lng: 1.443363}}
                  zoom={8}
                />
                       <Autocomplete/>

         </div>
        )}
    />

         </Menu>
       )
   }

export default renderMenu;