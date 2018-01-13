import React, { Component } from 'react';

import MapContainer from './MapContainer';
import ValidationComponent from './ValidationComponent';

class MainComponent extends Component{

    // w buses będą numery obiektów dla których pobierać dane
    // w buses data będą obiekty {numerLini, Lat, Lng}
      state = {
           buses : [],
           busesData : [],
           inputValue : '',
        }

    onButtonAddClick = () => {
        console.log(this.state.inputValue.length);
        if (this.state.inputValue.length <= 3 && this.state.inputValue.match("^[0-9]*$") ){
            this.setState({
                buses :  [...this.state.buses, this.state.inputValue]
            }
        )
            
        console.log(this.state.inputValue);
            console.log("chuj!");
            console.log(this.state.buses);
        }
       }

    onInputChange = (event) => {
        this.setState({inputValue : event.target.value});
    }

        
    render()
    {
        const style = {
            height: '100%'
        };


        return(
            <div style = {style} >
              <MapContainer buttonAddClickHandler = {this.onButtonAddClick} inputHandler = {this.onInputChange}
              inputValue = {this.state.inputValue} vehicles = {this.state.buses}/>
            </div>
        )

    }
}

export default MainComponent;