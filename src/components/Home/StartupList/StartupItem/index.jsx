import React from 'react'
import Chip from './../../../common/Chip'
import {Link} from 'react-router-dom'
import './styles.css'

const StartupItem = ( {startup:{id, name, oneLiner, logoUrl, industry, website, fundraiseStage}} ) => {
  return (
    <Link to={`startup/${id}`} className='startupItem-link'>
    <div className='startupItem-wrap'>
        <img src={logoUrl} alt="Logo of the company" className='startupItem-cover' />
        <Chip label={industry} />
        <h3>{name}</h3>
        <p className='startupItem-desc'>{oneLiner}</p>

        <footer>
          <div className='startupList-details'>
            <p><strong>Fundraise stage: </strong>{fundraiseStage}<br/><strong>Website: </strong>{website}</p>
          </div>
        </footer>
    </div>
    </Link>
  )
}

export default StartupItem