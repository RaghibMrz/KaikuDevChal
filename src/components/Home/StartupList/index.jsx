import React from 'react'
import StartupItem from './StartupItem'
import './styles.css'

const StartupList = ({startups}) => {
    return (
    <div className='startupList-wrap'>
        {startups.map(startup => (
            <StartupItem startup={startup} key={startup.id} /> 
        ))}
    </div>
  )}

export default StartupList