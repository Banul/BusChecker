import React, { Component } from 'react';
import MapContainer from './MapContainer';
import busDataParser from './BusDataParser';

class MainComponent extends Component{

    // w buses będą numery obiektów dla których pobierać dane
    // w buses data będą obiekty {numerLini, Lat, Lng}
    
    componentDidMount(){
      console.log("DID MOUNT!!!!");
   

    }

    componentDidUpdate( nextProps, nextState ){
      console.log('[App.js - UPDATE] ComponentDidUpdate');
   
    }

    componentWillUnmount() {
        console.log("WILL UNMOUNT!");
    }

      state = {
           buses : [],
           busesData : [],
           inputValue : '',
           focusVehicle: false,
           intervalId : ''
        }

      vehicleLocationReturner(props) {
      let resolved = new Array();
      const URL = "https://cors-anywhere.herokuapp.com/http://api.um.warszawa.pl/api/action/busestrams_get/?resource_id=%20f2e5503e-%20927d-4ad3-9500-4ab9e55deb59&apikey=0f3b3264-6613-4b0b-9f88-c7f84f770563&type=1&line="
      let finalResult = '';

      let readableStream =  props.map(vehicleNumber => fetch(`${URL}${vehicleNumber}`).then(results => {
            let result = results.json();
            result.then(res => {
                 finalResult = res;
                 resolved.push(res)
                 this.setState({
                     busesData : resolved
                 })
            })
        }
        ));


        if (this.state.busesData.length !== 0){
        busDataParser(this.state.busesData);
        }
        

    }

    onButtonAddClick = () => {
    
        if (this.state.inputValue.length <= 3 && this.state.inputValue.match("^[0-9]*$") &&
             !this.state.buses.includes(this.state.inputValue) && this.state.inputValue !== '' ){   
            if (this.state.currentIntervalId !== ''){
                clearInterval(this.state.intervalId);
            }
            const newBuses = [...this.state.buses, this.state.inputValue]
            this.vehicleLocationReturner(newBuses);
            let newIntervalId = setInterval(() => this.vehicleLocationReturner(this.state.buses), 5000);

            this.setState({
                buses :  newBuses,
                intervalId : newIntervalId
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
        const indexToDelete = this.state.buses.indexOf(num);
        let vehicles = this.state.buses;
        vehicles.splice(indexToDelete, 1);

        this.setState({
            buses : vehicles
        })
         if (this.state.currentIntervalId !== ''){
                clearInterval(this.state.intervalId);
        }
        console.log("handledelete");
        console.log(this.state.buses);
        if(this.state.buses.length !== 0){
        let newIntervalId = setInterval(() => this.vehicleLocationReturner(this.state.buses), 5000);
        this.setState({
            intervalId : newIntervalId
        })
        }

        if (this.state.buses.length === 0){
            this.setState({
                intervalId : ''
            })
       
        }
    

        
    }

    // pobierz dane 
    getData = () => {
        this.onButtonAddClick();
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
              getData = {this.getData} mapToShowOnMap = {this.state.busesData}
              />
            </div>
        )

    }
}

export default MainComponent;