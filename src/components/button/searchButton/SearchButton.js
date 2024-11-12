import React from 'react';
import "./SearchButton.css";

function SearchButton ({onClick, text, type}) {
    return (
        <button onClick={onClick} type={type} className="search-button__reusable">
            {text}
        </button>

    );
}

export default SearchButton;