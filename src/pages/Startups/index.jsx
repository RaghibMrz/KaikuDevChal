import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import { startupList } from '../../config/data'
import Header from '../../components/Home/Header'
import Chip from './../../components/common/Chip'
import './styles.css'
import EmptyList from '../../components/common/EmptyList'

const Startup = () => {
  const {id} = useParams()
  const [startup, setStartup] = useState(null)

  useEffect(() => {
    let startup = startupList.find((startup)=>startup.id===id)
    if (startup) {
      setStartup(startup)
    }
  }, [])

  return (
    <div>
        <Header show={false} value={null} clearSearch={null} formSubmit={null} handleSearch={null}/>
        {
          startup ? <div className='startup-wrap'>
                      <header>
                        <p className='startup-date'></p>
                        <h1>{startup.name}</h1>
                        <img src={startup.logoUrl} alt='company logo' />
                      </header>
                      <p className='startup-desc'>
                        <strong>One Liner: </strong><br/>{startup.oneLiner}<br/><br/>
                        <strong>Stage: </strong>{startup.stage}<br/><br/>
                        <strong>Industry: </strong>{startup.industry}<br/><br/>
                        <strong>Website: </strong><a href={startup.website}>{startup.website}</a><br/><br/>
                        <strong>Incorporated Location: </strong>{startup.incorporatedLocation}<br/><br/>
                        <strong>Fundraise Stage: </strong>{startup.fundraiseStage}<br/><br/>
                        <strong>Target Raise: </strong>{startup.targetRaise}<br/><br/>
                        <strong>Target Equity: </strong>{startup.targetEquity}
                      </p>
                      <div className="startup-productHighlights">
                        {startup.productHighlights.map((productHighlights,index)=><div><Chip key={index} label={productHighlights}/></div>)}
                      </div>
                    </div>: <EmptyList/>
        }
    </div>
  );
};

export default Startup