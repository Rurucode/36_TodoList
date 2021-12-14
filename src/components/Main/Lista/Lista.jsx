import React, { Component } from "react";
import Tarea from "./Tarea/Tarea";
import data from "../../../data";

class Lista extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      tareas: data
    }
  }

  createTarea = (tarea) => {
    this.setState({tareas: [...this.state.tareas, tarea]});
    console.log(this.state.tareas)
  }

  handleSubmit = event => {
    event.preventDefault();
    const tarea = event.target.tarea.value
    this.createTarea(tarea)
    event.target.tarea.value = '';
  }

  pintarTarea = () => {
    return this.state.tareas.map((tarea, i)=> <Tarea tarea={this.state.tareas[i]}  delete={()=> this.borrarTarea(i)} key={i}/>)
  }


  clearButton = () => {
    this.setState({tareas: []})
  }

  borrarTarea = (i) => {
    const listaTareas = this.state.tareas.filter((tarea, indice)=> indice !== i )
    console.log(listaTareas)
    this.setState({tareas: listaTareas})
  }





  render() {
    return <div>
      <h1>Lista de tareas To Do!!</h1>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="tarea">Introduce tu tarea</label><br/>
        <input type="text" id="tarea" name="tarea" required="required"/><br />
        <input type="submit" value="Add"/><br/>
      </form> 
        
      <button onClick={this.clearButton}>Clear</button>
      <button onClick={()=> this.setState({tareas: data})}>Reset</button>

      {this.pintarTarea()}  

      
    </div>;
  }
}

export default Lista;




