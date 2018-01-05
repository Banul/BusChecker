import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react'
import React, { Component } from 'react';

export class MapContainer extends Component{
    render(){
        return(
            <Map google = {this.props.google} zoom={14}>
            
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCq-GMlFPxSi4Hlw6-8pttvoPb8WFLoON4'
})(MapContainer)