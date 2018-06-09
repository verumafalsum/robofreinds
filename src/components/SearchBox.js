import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div>
            <input
            className='pa3 mb3 br3' 
            type='search' 
            placeholder='Search robots...'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;