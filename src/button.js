import { Button } from "bootstrap";
import {React, useState} from "react";

function ColorButton(){

    const [Color, changeColor] = useState('red')
   const colorSwitch = Color === "red" ? 'green' : 'red';

    return(
        <button style={{backgroundColor: colorSwitch}} onClick = {()=> changeColor(colorSwitch)} >
            the color is {colorSwitch}
        </button>
    )
}

export default ColorButton;
