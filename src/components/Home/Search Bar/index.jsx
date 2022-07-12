import React from 'react'
import './style.css'

const SearchBar = ({value, handleSearch, clearSearch, formSubmit}) => {
  return (
    <div className='searchBar-wrap'>
        <form onSubmit={formSubmit}>
            <input type="text" onChange={handleSearch} placeholder='Search for opportunities' value={value} />
            {value && <span onClick={clearSearch}>X</span>}
            <button>Search</button>
        </form>
    </div>
  )
}

export default SearchBar