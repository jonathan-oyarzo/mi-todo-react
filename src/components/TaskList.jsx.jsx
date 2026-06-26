import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
function TaskList({ tareas, eliminarTarea }) {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <li key={index}>
          {tarea}
          <button onClick={() => eliminarTarea(index)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;