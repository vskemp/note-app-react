import React from 'react';

SearchBar.defaultProps = {
    text: 'default search text'
}

function SearchBar({
    text,
    handleChange
}) {
    return (
        <input 
          onChange={(event) => {
            handleChange(event.target.value)
          }}
          value={text} 
        />
    );
}

export default SearchBar;