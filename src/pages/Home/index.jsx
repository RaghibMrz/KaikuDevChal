import React, { useState } from 'react'
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
    const filteredStartups=allStartups.filter(startup=>startup)
  }

  return (
    <div className="main-container">
        <div className="header-div">
          <Header />
        </div>
        <div className="startupList-div">
          <StartupList startups={startups}/>
        </div>
    </div>

  )}

export default Home