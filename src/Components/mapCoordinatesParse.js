const arrayOfData = new Array();

const mapCoordinatesParse = (props) => props.map (item =>{
      ({
        title: item.Lines,
        position: {
            lat: item.latitude,
            lng: item.longitude
        },
        onLoaded: (googleMaps, map, marker) => {
            const infoWindow = new googleMaps.infoWindow({
                content:`<div>${item.number}</div>`
            })
            infoWindow.open(map,marker)
        }
      })
})

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