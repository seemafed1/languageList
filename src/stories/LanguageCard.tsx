import React from 'react';
import './languageCard.css'

const LanguageCard = ({banner,title, backgroundColor}: any) => {
    
  return (
      <div className='card' style={{backgroundColor: backgroundColor}}>
        <h1>{banner}</h1>
        <p>{title}</p>
      </div>
  );
}

export default LanguageCard;
