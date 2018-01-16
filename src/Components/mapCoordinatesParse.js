

const mapCoordinatesParse = (props) => {
    
    let arrayOfData = new Array();

    props.map (item =>{

    

   let parsedItem = {
        title: item.number,
        position: {
            lat: item.latitude,
            lng: item.longitude
        },
        onLoaded: (googleMaps, map, marker) => {
        
            if (item.checked === true){
          marker.setAnimation(googleMaps.Animation.BOUNCE)
        }
            const infoWindow = new googleMaps.InfoWindow({
                content:`<div>${item.number}</div>`,
            })
            infoWindow.open(map,marker)
        }
      }

    arrayOfData.push(parsedItem);
})
    return arrayOfData;
}

export default mapCoordinatesParse;

