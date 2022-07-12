import React from 'react'
import SearchBar from '../Search Bar';
import './styles.css'

const Header = () => (
    <header className='home-header'>
        <div className="flex-container">
            <div className="title-container">
                <h1>Kaiku</h1>
                <p>Staging Area</p>
            </div>
            <div className="searchBar-container">
                <SearchBar />
            </div>
        </div> 
    </header>
);

export default Header