import React, { useEffect, useState } from 'react'
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

  const url = 'http://127.0.0.1:1337/api/players?populate=%2A'
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON.data)
  }
  
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <div className="box-roster" >
      <h2 className="title-roster">Jugadores</h2>
      <hr className='hr-roster'/>
      <nav className="menu-roster">
        <ul className="list-roster">
          <li className="position-roster" onClick={() => filterSelection('Goalkeeper', 0)}>Porteros</li>
          <li className="position-roster" onClick={() => filterSelection('Defense', 1)}>Defensas</li>
          <li className="position-roster" onClick={() => filterSelection('Midfielder', 2)}>Mediocentros</li>
          <li className="position-roster" onClick={() => filterSelection('Forward', 3)}>Delanteros</li>
        </ul>
      </nav>
      <div className="players-swiper">
        <ul className="players-list">
        { !todos ? 'Cargando...' :
        todos.map( (todo, index)=>{
          const position = todo.attributes.positions.data.map( position => {
            return position.attributes.Type;
          })
          return <CardPlayer key={index} nombre = {todo.attributes.Name} apellido = {todo.attributes.Surname} posicion={position} dorsal = {todo.attributes.Dorsal} />
        } )}
        </ul>
      </div>
    </div>
  )
}