import React from 'react'
import SearchBar from '../Search Bar';
import './styles.css'
import { Link } from 'react-router-dom'

const Header = ({show, value, handleSearch, clearSearch, formSubmit}) => { 
    const rightSide = show ?  <div className="searchBar-container">
                                <SearchBar value={value} clearSearch={clearSearch} formSubmit={formSubmit} handleSearch={handleSearch}/>
                            </div> : (<Link className='startup-goBack' to='/'><span>&#8592;</span>Home</Link>)
    
    return (
    <header className='home-header'>
        <div className="flex-container">
            <div className="title-container">
                <h1>Kaiku</h1>
                <p>Staging Area</p>
            </div>
            {rightSide}
        </div> 
    </header>
)};

export default Header