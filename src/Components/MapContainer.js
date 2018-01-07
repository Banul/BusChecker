import React from "react";
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map";
import Autocomplete from 'react-google-autocomplete';
import MenuComponent from './MenuComponent';


 
const mapContainer = () =>
  <ReactGoogleMapLoader className = "mapStyle"
    params={{
        key: 'AIzaSyCq-GMlFPxSi4Hlw6-8pttvoPb8WFLoON4', // Define your api key here
        libraries: "places, geometry", // To request multiple libraries, separate them with a comma
    }}
    render={googleMaps =>
        googleMaps && (
         <div className = "mapStyle">
      <Autocomplete/>
            <ReactGoogleMap 
                  googleMaps={googleMaps}
                  center={{lat: 43.604363, lng: 1.443363}}
                  zoom={8}
                />
         </div>
        )}
    />

export default mapContainer;