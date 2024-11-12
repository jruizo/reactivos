import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);

  //componentDidUpdate
  //Cada que se renderiza
  useEffect(() => {
    console.log("componentDidUpdate");
  });

  //componentDidMount
  //Cuando se monta
  useEffect(() => {
    console.log("componentDidMount")
    /* si dentro del usEffect se hace un return, ete se ejecuta al desmontarse el componente
    return() => {
      console.log("willUnMount");
    }
      */
  },[]);

  //original
  useEffect(() => {
    console.log("name cambio")
  },[name]);

  //original, cambia age
  useEffect(() => {
    console.log("age cambio")
  },[age]);

   //original, cambia name o age
   useEffect(() => {
    console.log("name o age cambio")
  },[name,age]);

  return (
    <div className="App">
      <input value={name} onChange={({target: { value }}) =>setName(value) } />
      <input value={age} onChange={({target: { value }}) =>setAge(value) } />
    </div>
  );
}

export default App;
