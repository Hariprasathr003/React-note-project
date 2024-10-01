import React from "react";
import { MdSearch } from "react-icons/md";

const Search =({ handlesearchnote})=>{
    return <div className="searchbar">
        <MdSearch className="search-icons" size="1.4em" />
        <input onChange={(event)=>handlesearchnote(event.target.value)} type="text" placeholder="type to search..."/>

    </div>
};
export default Search;