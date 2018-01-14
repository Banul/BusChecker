import React, { Component } from 'react';

import MapContainer from './MapContainer';

class MainComponent extends Component{

    // w buses będą numery obiektów dla których pobierać dane
    // w buses data będą obiekty {numerLini, Lat, Lng}
      state = {
           buses : [],
           busesData : [],
           inputValue : '',
           focusVehicle: false
        }

    onButtonAddClick = () => {
        if (this.state.inputValue.length <= 3 && this.state.inputValue.match("^[0-9]*$") &&
             !this.state.buses.includes(this.state.inputValue) && this.state.inputValue !== '' ){
            this.setState({
                buses :  [...this.state.buses, this.state.inputValue]
            }
        )
        }
       }

    onFocusVeh = () => {
        this.setState({
            focusVehicle : true
        })
    }

    handleDeleteItem = (num) => {
        console.log(num);
        const indexToDelete = this.state.buses.indexOf(vehicleNumber);
        const newBuses = this.state.buses.splice(indexToDelete);
        
        
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
              inputValue = {this.state.inputValue} vehicles = {this.state.buses} focusVeh = {this.onFocusVeh}
              focusState = {this.state.focusVehicle} cickedListElement = {(num) => this.handleDeleteItem(num)}
              />
            </div>
        )

    }
}

export default MainComponent;