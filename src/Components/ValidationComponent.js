import React from 'react';

const ValidationComponent = (props) => {
    const inputLen = props.inputValue.length;
    const inputValueLower = props.inputValue.toLowerCase();

    let info = null
    if ((inputLen > 3 || !inputValueLower.match(/^[0-9]+$/)) && props.focusState === true && inputLen !== 0){
        info = "Wpisana zła wartość."
    }

    return (
        <div className = "warningStyle col-md-12"> {info} </div>
    )
}

export default ValidationComponent;