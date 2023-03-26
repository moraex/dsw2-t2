import React from 'react';
import './styles.css';

const CardGrid = ({ children }) => {

  return (
    <div className='card-grid'>
      {children}
    </div>
  )

}

export default CardGrid;
