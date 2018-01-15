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
      // You can add and remove coordinates on the fly.
      // The map will rerender new markers and remove the old ones.
      coordinates={[
        {
          title: "Toulouse",
          position: {
            lat: 52.302389,
            lng: 21.041596
          },
          onLoaded: (googleMaps, map, marker) => {

                const infoWindow = new googleMaps.InfoWindow({
              content: `
                <div>
                  132
                </div>
              `,
            })
            infoWindow.open(map, marker)

           }
        
      }, 
      {
         title: "Toulouse",
          position: {
            lat: 51.302389,
            lng: 21.041596
          },
           onLoaded: (googleMaps, map, marker) => {

           }
      }
      ]
    }
      
      
      
      center={{lat: 52.604363, lng:21.443363}}
      zoom={8}

      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.SATELLITE)
      }}
    />

 <div/>
         </div>
         <div className = "panel">
             <p>Wybierz miejsce</p>
             <Autocomplete className = "inputStyle col-md-4" 
                 componentRestrictions={{country: "pl"}} 
                 types={['geocode']}
        
            />
         <button type="button" className="btn btn-success buton col-md-4">Zmień miejsce</button> 
              <p> Podaj numer autobusu/tramwaju</p>
            <input onChange = {props.inputHandler} className = "col-md-4"
            onFocus = {props.focusVeh}/>
            <p></p>
              <button type="button" className="btn btn-success buton col-md-4" onClick = { props.getData }>Dodaj</button> 
             <ValidationComponent inputValue = {props.inputValue} focusState = {props.focusState}/>
             <Vehicles vehicles = {props.vehicles} itemClicked = {props.cickedListElement}/>
         </div>
         </div>
        )}
    />

export default mapContainer;

//  googleMaps={googleMaps}
//                   center={{lat: 43.604363, lng: 1.443363}}
//                   zoom={8}


//  coordinates = {[
//                  {
//             title: "Toulouse",
//             position: {
//             lat: 43.604363,
//             lng: 1.443363,
//             }
//              }]}