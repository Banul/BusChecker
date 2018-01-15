const parseData =  (props) => {

    const arrayOfItems = new Array();

for (let k = 0; k<props.length; k++){

    for(let i = 0; i < props[k].result.length; i++){
      arrayOfItems.push({
            latitude: props[k].result[i].Lat,
            longitude: props[k].result[i].Lon,
            number: props[k].result[i].Lines,
            date: props[k].result[i].Time
      });
   }
}
    console.log(arrayOfItems);
   
}


export default parseData;