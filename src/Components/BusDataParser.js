const parseData =  (props) => {

    console.log("props");
    console.log(props);
    const ArrayOfArrays = new Array();

   const singleArray = props.map(data => {
       ArrayOfArrays.push(data);

   })
    
}


export default parseData;