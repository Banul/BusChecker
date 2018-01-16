import React, { Component } from 'react';
import MapContainer from './MapContainer';
import busDataParser from './BusDataParser';
import mapCoordinatesParse from './mapCoordinatesParse';
import { geocodeByAddress, getLatLng  } from 'react-places-autocomplete';


class MainComponent extends Component{

      state = {
           buses : [],
           busesData : [],
           inputValue : '',
           inputGeocodeValue : '',
           focusVehicle: false,
           intervalId : '',
           parsedData : undefined,
           checkedArray :[],
           latLngToChangeLocation: {lat:52.229676, lng:21.012229},
           latLngNew:{}

      }

      componentDidMount(){
          console.log("didMount");
          console.log(this.state.latLngToChangeLocation);
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
        const parsedData = busDataParser(this.state.busesData, this.state.checkedArray);
        
        this.setState({
            parsedData : parsedData
        })

        
        }
        
    }



    getCheckedItems = (vehicleNumber) => {
       const indexValueChecked = this.state.checkedArray.indexOf(vehicleNumber)
       if (indexValueChecked < 0 ){
           const newArrayChecked = [...this.state.checkedArray, vehicleNumber]
           this.setState({
               checkedArray: newArrayChecked
           })
       }
        else if(indexValueChecked >= 0){
           let newCheckedArray = this.state.checkedArray;
           newCheckedArray.splice(indexValueChecked, 1);

           this.setState({
               checkedArray: newCheckedArray
           })
        }

    }

    onButtonAddClick = () => {
    
        if (this.state.inputValue.length <= 3 && this.state.inputValue.match("^[0-9]*$") &&
             !this.state.buses.includes(this.state.inputValue) && this.state.inputValue !== '' ){   
            if (this.state.currentIntervalId !== ''){
                clearInterval(this.state.intervalId);
            }
            const newBuses = [...this.state.buses, this.state.inputValue];
            this.vehicleLocationReturner(newBuses);
            let newIntervalId = setInterval(() => this.vehicleLocationReturner(newBuses), 5000);

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

        if(this.state.buses.length !== 0){
        let newIntervalId = setInterval(() => this.vehicleLocationReturner(this.state.buses), 5000);
        this.setState({
            intervalId : newIntervalId
        })
        }

        if (this.state.buses.length === 0){

            this.setState({
                buses: [],
                busesData: [],
                intervalId: '',
                parsedData: undefined
            });
            clearInterval(this.state.intervalId);

       
        }
    

        
    }
    
    

    // pobierz dane 
    getData = () => {
        this.onButtonAddClick();
    }

    onInputChange = (event) => {
        this.setState({inputValue : event.target.value});
    }

    onInputGeocodeChange = (event) => {
        this.setState({inputGeocodeValue : event.target.value});

    }

    geocode = () => {
    geocodeByAddress(this.state.inputGeocodeValue)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
          this.setState({
              latLngNew: latLng
          })
            console.log("state")
            console.log(this.state.latLngToChangeLocation)
      })
      .catch(error => console.error('Error', error))
  }

        
    render()
    {
        const style = {
            height: '100%'
        };
    

        return(
            <div style = {style} >
              <MapContainer buttonAddClickHandler = {this.onButtonAddClick} inputHandler = {this.onInputChange}
              inputGeocodeHandler = {this.onInputGeocodeChange}
              inputValue = {this.state.inputValue} vehicles = {this.state.buses} focusVeh = {this.onFocusVeh}
              focusState = {this.state.focusVehicle} clickedListElement = {(num) => this.handleDeleteItem(num)}
              getData = {this.getData} mapToShowOnMap = {this.state.busesData} parsedData = {this.state.parsedData}
              checked = {(num) => this.getCheckedItems(num)} geocode = {() => this.geocode()}
              shownLocation = {this.state.latLngToChangeLocation}
              />
            </div>
        )

    }
}

export default MainComponent;