import React from "react";
import './SearchBar.css'

const SearchBar = () => {
    return(
        <div className="Searchbar_main">
            <button className="searchbar_dest">
                Anywhere
            </button>

            <span className="searchbar_line"></span>

            <button className="searchbar_date">
                Any week
            </button>

            <span className="searchbar_line"></span>

            <button className="searchbar_guests">
                Add guests
                <span className="searchbar_guests_search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="white" class="bi bi-search" viewBox="0 -1 16 20" style={{fontWeight : "700"}}>
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" stroke="color" stroke-width="width"/>
                    </svg>
                </span>
            </button>
        </div>
    )
}

export default SearchBar;