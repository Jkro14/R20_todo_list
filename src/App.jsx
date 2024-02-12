import { useState } from "react";

const App = () => {
  const [state, setState] = useState({
    tarea: "",
    tareas: [],
  });

  const nuevaTarea = () => {
    setState((prevState) => ({
      ...prevState,
      tareas: [...prevState.tareas, prevState.tarea],
      tarea: "",
    }));
  };

  const eliminarTarea = (index) => {
    setState((prevState) => ({
      ...prevState,
      tareas: prevState.tareas.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 ">
      <div className="justify-center flex flex-col   items-center">
        <p className="text-3xl" htmlFor="tarea">
          Tasca
        </p>
        <input
          className=" border-2 border-gray-300 rounded-md px-3 py-1 mt-3"
          id="tarea"
          type="text"
          value={state.tarea}
          onChange={(e) => setState({ ...state, tarea: e.target.value })}
        />
        
      </div>
      <br></br>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-1 rounded"
        onClick={nuevaTarea}
      >
        Enviar
      </button>{" "}
      {}
      <div className=" flex flex-col items-center justify-center mt-10">
      <p className="text-3xl ">Tasques</p>
        <div className="flex flex-col items-center justify-center  ">
          
          {state.tareas.map((tarea, index) => (
            <p
              key={index}
              className=" flex-1 p-4 border-2 border-gray-300 rounded-md px-3 py-1 mt-3 bg-blue-200 "
            >
              {tarea}
              <button
                className=" px-1 rounded-md ml-12 bg-red-500 hover:bg-red-700 text-white font-bold px-5 py-1 rounded"
                onClick={() => eliminarTarea(index)}
              >
                x
              </button>{" "}
              {}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
