import { useState } from "react";

const jsonData = [{
  key: "1",
  name: "Jorge"
},{
  key: "2",
  name: "Alejandro"
},{
  key: "3",
  name: "Bianey"
},{
  key: "4",
  name: "Maria José"
}]

const App = () => {
  const renderData = () => {
    return jsonData?.map((value,index) => (        
          <div key={value.key}>
            <p>{value.name}</p>
          </div>      
    ));
  };
  return (
    <div>
      {
      /*Se puede omitir el index, 
      porque se tiene un key por elemento
      el key se debe colocar para que react identifique cada elemento
      en caso de que se actualice el DOM
      No se ve en el inspector de elementos
      */
      }
      {//forma uno
      }
      {jsonData?.map((value,index) => {
        return(
          <div key={value.key}>
            <p>{value.name}</p>
          </div>
        );
      })}
      {//forma dos
      }
      {renderData()}
    </div>
  );
}

export default App;
