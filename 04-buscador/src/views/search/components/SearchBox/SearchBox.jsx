import { useState } from "react";

export default function SearchBox(){
    const [SearchText,setSearchText] = useState();
    return (
        <div>
            Buscador de personal
            <label>
                <input value={SearchText} onChange={({ target: {value}}) => setSearchText(value)}/>
            </label>
            <button>Buscar</button>
        </div>
    );
}