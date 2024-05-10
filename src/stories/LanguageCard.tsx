import React from 'react';
import './languageCard.css'

const LanguageCard = ({banner,title}: any) => {
    
  return (
      <div className='card'>
        <h1>{banner}</h1>
        <p>{title}</p>
      </div>
  );
}

export default LanguageCard;
