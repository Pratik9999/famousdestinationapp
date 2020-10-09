import React from 'react';
import SearchIcon from '../images/search-icon.svg';
import '../styles/Search.css';

const Search = ({ onSearchChange, onSearchBtnClickOrEnter }) => {
   return (
      <div className="search_container">
         <input type="text" spellCheck="false" onChange={onSearchChange} onKeyPress={onSearchBtnClickOrEnter} id="searchInput" placeholder="Enter country name where you want famous destinations... " />
         <button onClick={onSearchBtnClickOrEnter}> 
            <img src={SearchIcon} alt="search-icon"></img>
         </button>
      </div>
   );
}
 
export default Search; 