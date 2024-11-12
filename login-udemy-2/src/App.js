import { useState } from "react";

function App() {
  //Declaramos constantes
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  //Declaramos funciones que utilizan setState para cambiar el estado
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`usuario: ${email}, password: ${password}`)
  }
  return (
    //Llamamos las funciones a trav{es de eventos}
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar sesión</h2>
        <label>
          Correo:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>        
        <button type="submit">
          Enviar
        </button>        
      </form>
    </div>
  );
}

export default App;
