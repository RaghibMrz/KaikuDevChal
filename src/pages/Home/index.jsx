import React, { useState } from 'react'
import EmptyList from '../../components/common/EmptyList'
import Header from '../../components/Home/Header'
import StartupList from '../../components/Home/StartupList'
import { startupList } from '../../config/data'
import './../../App.css'

const Home = () => {
  const [startups, setStartups] = useState(startupList)
  const [searchKey, setSearch] = useState('')

  // Search Submit
  const handleSearchSubmit=event=>{
    event.preventDefault();
    handleSearchResults();
  }

  // Search for startups
  const handleSearchResults=()=>{
    const allStartups=startupList
    const filteredStartups=allStartups.filter(startup=>
      startup.name.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setStartups(filteredStartups);
  }

  const handleClearSearch = () => {
    setStartups(startupList)
    setSearch('')
  }

  return (
    <div className="main-container">
        <div className="header-div">
          <Header show={true} value={searchKey} clearSearch={handleClearSearch} formSubmit={handleSearchSubmit} handleSearch={e=>setSearch(e.target.value)}/>
        </div>
        <div className="startupList-div">
          {!startups.length ? <EmptyList /> :<StartupList startups={startups}/>}
        </div>
    </div>

  )}

export default Home