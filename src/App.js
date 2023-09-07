import './App.css';
import { useState } from 'react';
import Form from "../src/Form.js";

function App() {
  const [counter, setCounter] = useState(0);


  function onAdd(){
    setCounter(counter+1);
  }

  // de los componentes que hicierón copiamos de lo que hicimos, igual componente input, 
  // olvidense componente tabla, vamos a usar formulario, va ser un formulario de registro persona
  // va captura nombre, correo ,dirección, va a capturar, como si estuviera creado una contraseña
  // hagan eso vamos hacer la validación de los estados
  // vamos haciendo formulario y luego veos como validamos en el los campos, solamente capturemos letras
  // sin numeros, estamos pidiendo edad, solo capture numeros, solo sea numero enteros
  //
  function onReduce(){
    setCounter(counter-1);
  }
  //definimos el estado inicial no vamos a modificar variable, va ser el hub de stade

  return (
    <div className="App">
  

    <p>Contador</p>
    <p>{counter}</p>

    <input type = "text" placeholder='Nombre'></input>
    <button onClick = {onAdd}>Aumentar</button>
    <button onClick = {onReduce}>Reducir</button>

    <Form>
    
    </Form>
     
    </div>
  );
}



export default App;
