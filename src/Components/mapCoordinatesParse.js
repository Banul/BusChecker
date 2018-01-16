

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
            const infoWindow = new googleMaps.infoWindow({
                content:`<div>${item.number}</div>`,
            })
            infoWindow.open(map,marker)
        }
      }

    console.log("araj");
    arrayOfData.push(parsedItem);
})
    return arrayOfData;
}

export default mapCoordinatesParse;

//    coordinates={[
//         {
//           title: "Toulouse",
//           position: {
//             lat: 52.302389,
//             lng: 21.041596
//           },
//           onLoaded: (googleMaps, map, marker) => {

//                 const infoWindow = new googleMaps.InfoWindow({
//               content: `
//                 <div>
//                   132
//                 </div>
//               `,
//             })
//             infoWindow.open(map, marker)

//            } 
//       }, 
//       {
//          title: "Toulouse",
//           position: {
//             lat: 51.302389,
//             lng: 21.041596
//           },
//            onLoaded: (googleMaps, map, marker) => {

//            }
//       }
//       ]
//     }



