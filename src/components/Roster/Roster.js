import React from 'react'
import CardPlayer from '../cardPlayer/cardPlayer'
import './Roster.css'

export default function Roster(props) {
  const { porteros, defensas, mediocentros, delanteros } = props;

  function filterSelection(c, n) {
    var x, i;
    x = document.getElementsByClassName("box-player");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
    if (document.getElementsByClassName("active").length != 0) {
      document.getElementsByClassName("active")[0].className = "position-roster";
    }
    document.getElementsByClassName("position-roster")[n].className += " active";
  }

  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
  }

  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  return (
    <div className="box-roster" >
      <h2 className="title-roster">Jugadores</h2>
      <hr className='hr-roster'/>
      <nav className="menu-roster">
        <ul className="list-roster">
          <li className="position-roster" onClick={() => filterSelection('portero', 0)}>Porteros</li>
          <li className="position-roster" onClick={() => filterSelection('defensa', 1)}>Defensas</li>
          <li className="position-roster" onClick={() => filterSelection('mediocentro', 2)}>Mediocentros</li>
          <li className="position-roster" onClick={() => filterSelection('delantero', 3)}>Delanteros</li>
        </ul>
      </nav>
      <div className="players-swiper">
        <ul className="players-list">
          <CardPlayer nombre = "finnur" apellido = "viddarsson" posicion="portero" dorsal = "1" />
          <CardPlayer nombre = "javier" apellido = "cubas" posicion="portero" dorsal = "13" />
          <CardPlayer nombre = "miguel" apellido = "pereira" posicion="portero" dorsal = "30" />
          <CardPlayer posicion="defensa" />
          <CardPlayer posicion="defensa" />
          <CardPlayer posicion="defensa" />
          <CardPlayer posicion="defensa" />
        </ul>
      </div>
    </div>
  )
}