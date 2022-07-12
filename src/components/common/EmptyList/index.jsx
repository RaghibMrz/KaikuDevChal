import React from 'react';
import './styles.css';
import logo from './../../../assets/images/empty-page.gif'

const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src={logo} alt='empty' />
  </div>
);

export default EmptyList;