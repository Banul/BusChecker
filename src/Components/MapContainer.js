import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import {slide as Menu} from 'react-burger-menu';

export class MapContainer extends Component{


    render(){
        return(
            <div>
            
             <Map google = {this.props.google} zoom={14}>
            
            </Map> 
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCq-GMlFPxSi4Hlw6-8pttvoPb8WFLoON4'
})(MapContainer)