import React from 'react';
import './styles.css'

const VacancyCard = ({ icon, name, description, intervalStart, intervalEnd }) => {
  return (
    <div className="vacancy-card">
      <div className="vacancy-name">
        <div className="vacancy-icon">
          <img src={icon} alt={name}/>
        </div>
        {name}
      </div>
      <span className="vacancy-description">{description}</span>
      <p className="vacancy-period">
        Dias úteis, das
        <time datetime={intervalStart}>
          {intervalStart}
        </time>
        até as
        <time datetime={intervalEnd}>
          {intervalEnd}
        </time>
      </p>
    </div>
  )
}

export default VacancyCard;
