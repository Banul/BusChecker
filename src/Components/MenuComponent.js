import React from 'react';
import {slide as Menu} from 'react-burger-menu';

  
   const renderMenu = () => {

       return(
         <Menu >
            <p> Podaj numer autobusu/tramwaju : </p>
            <input/>
            <button type="button" className="btn btn-success button">Akceptuj</button>
            <button type="button" className="btn btn-danger button">Anuluj</button>
            <p> Podaj interesujące Cię miejsce: </p>
            <input className = "inputStyle"/>
            <button className="btn btn-success buttonChangeLocation"> Zmień lokacje </button>
         </Menu>
       )
   }

export default renderMenu;