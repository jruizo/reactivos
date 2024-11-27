import { useState } from "react";
import "./style.css";

const SearchBox = ({onSearch, onClose}) => {
    const [searchText,setSearchText] = useState("");

    const handleSearchText = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchClick = () => {
        setSearchText("");
        onClose();
    };

    return(
        <div className="search-box">
            <h2 className="search-box-titulo">Buscador de personal</h2>
            <div className="search-box-buttons">
                <label>
                    <input 
                    value={searchText} 
                    onChange={handleSearchText}
                    className="search-box-input"
                    ></input>
                </label>
                <button onClick={ () => onSearch(searchText) }>Buscar</button>
                <button onClick={ handleSearchClick }>Cerrar</button>
            </div>
        </div>
    );
}
export default SearchBox