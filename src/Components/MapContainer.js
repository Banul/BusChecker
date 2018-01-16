import React from "react";
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map";
import Autocomplete from 'react-google-autocomplete';
import ValidationComponent from './ValidationComponent';
import Vehicles from './Vehicles';
import iconMarker from '../images/location-pointer.svg';



 
const mapContainer = (props) =>
<ReactGoogleMapLoader className = "mapStyle"
    params={{ 
        key: 'AIzaSyCq-GMlFPxSi4Hlw6-8pttvoPb8WFLoON4', // Define your api key here
        libraries: "places, geometry", // To request multiple libraries, separate them with a comma
    }}


    render={googleMaps =>
        googleMaps && (
            
            <div className = "container">
         <div className = "map" >
             <ReactGoogleMap 
             googleMaps={googleMaps}  
             coordinates = {props.parsedData}
             
             
      
      
      Center={{lat:parseFloat(props.shownLocation.lat), lng:parseFloat(props.shownLocation.lng)}} 
      zoom={12}

      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.TERRAIN)

      }}

     
      
    
    />

 <div/>
         </div>
         <div className = "panel">
              <p className = "paragraph"> <b> Podaj numer autobusu/tramwaju</b> </p>
            <input onChange = {props.inputHandler} className = "col-md-4"
            onFocus = {props.focusVeh}/>
            <p></p>
              <button type="button" className="btn btn-success buton col-md-4" onClick = { props.getData }>Dodaj</button> 
             <ValidationComponent inputValue = {props.inputValue} focusState = {props.focusState} dupa = {props.shownLocation}/>
             <Vehicles vehicles = {props.vehicles} itemClicked = {props.clickedListElement} itemChecked = {props.checked}/>
         </div>
         </div>
        )}
    />

export default mapContainer;
