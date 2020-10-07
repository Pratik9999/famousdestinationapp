import React from 'react';
import SearchIcon from '../images/search-icon.svg';
import '../styles/Search.css';

const Search = () => {
   return (
      <div className="search_container">
         <input type="text" placeholder="Enter country name where you want famous destinations... " />
         <button>
            <img src={SearchIcon} alt="search-icon"></img>
         </button>
      </div>
   );
}
 
export default Search;