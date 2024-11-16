import { useState } from "react";

const SearchBox = () => {
    const [searchText,setSearchText] = useState("");

    const handleSearchText = (event) => {
        setSearchText(event.target.value);
    }

    return(
        <div>
            <div>
                Buscador de personal
                <label>
                    <input value={searchText} onChange={handleSearchText}></input>
                </label>
                <button>Buscar</button>
            </div>
            
        </div>
    );
}
export default SearchBox