import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter(
      (_, i) => i !== index
    );
    setTareas(nuevasTareas);
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>

      <div className="formulario">
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />

        <button onClick={agregarTarea}>
          Agregar
        </button>
      </div>

      <TaskList
        tareas={tareas}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}

export default App;

