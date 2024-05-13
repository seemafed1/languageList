import React, { useState } from 'react';
import './languageCard.css'

type Props = {
  banner: string,
  title: string,
  hoverColor?: string,
  backgroundColor?: string
}

const LanguageCard = ({ banner, title, hoverColor, backgroundColor}: Props) => {

  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    backgroundColor: isHovered ? hoverColor : backgroundColor
  };

  return (
      <div className='card' 
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <h1>{banner}</h1>
        <p>{title}</p>
      </div>
  );
}

export default LanguageCard;
