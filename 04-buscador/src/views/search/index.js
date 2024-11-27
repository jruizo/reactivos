
import { useState } from "react";
import SearchBox from "./components/SearchBox/index";
import "./style.css"
import data from  "../../data/users.json"

const Search = () => {

    const [isAtTop,setIsAtTop] = useState(false);

    const [usersData,setUsersData] = useState(data);

    const [results,setResults] = useState();

    const handleSearchClick = (searchText) => {
        if(usersData?.length) {
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = usersData.filter((value) => {
                return (
                    value.name.toLowerCase().includes(searchTextMinus) ||
                    value.phone.toLowerCase().includes(searchTextMinus) ||
                    value.email.toLowerCase().includes(searchTextMinus) ||
                    value.username.toLowerCase().includes(searchTextMinus)
                )
            });
            setResults(filteredData);
        }
        setIsAtTop(true);
    };

    const handleCloseClick = () => {
        setIsAtTop(false);
        setResults([]);
    };

    
console.log(results);
    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick}/>
        </div>
    )    
}
export default Search