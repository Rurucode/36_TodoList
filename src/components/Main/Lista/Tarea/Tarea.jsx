import React, { Component } from "react";
import './Tarea.css'

class Tarea extends Component {

  render() {
    return <div className="unaTarea">
      <input type="checkbox"></input>
      <p>{this.props.tarea}</p>
      <button onClick={this.props.delete}>Borrar Tarea</button>


    </div>
  }
}

export default Tarea;
