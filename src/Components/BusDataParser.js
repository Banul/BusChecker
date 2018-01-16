import mapCoordinatesParse from './mapCoordinatesParse';

const parseData =  (props, checkedArr) => {
    console.log("checkedArr");
    console.log(checkedArr);

    const arrayOfItems = new Array();

for (let k = 0; k<props.length; k++){
 
    console.log("teścik!!!11");
    console.log(k);
       console.log(checkedArr.indexOf(props[k].result[0].Lines))
          let checked = false;
        if (checkedArr.indexOf(props[k].result[0].Lines)>=0){
             checked = true;
        }
       
    for(let i = 0; i < props[k].result.length; i++){

        console.log(checked);
      
      arrayOfItems.push({
            latitude: props[k].result[i].Lat,
            longitude: props[k].result[i].Lon,
            number: props[k].result[i].Lines,
            date: props[k].result[i].Time,
            checked : checked

      });
   }
}

    return mapCoordinatesParse(arrayOfItems);
   
}


export default parseData;