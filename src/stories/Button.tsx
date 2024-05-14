import React, { useState } from 'react';

export interface Buttonitems {
    title : string;
    onClick?: () => void;
  }

  const Button = ({...props}:Buttonitems) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const buttonStyles = {
        width: '100%',
        backgroundColor: '#0A3773',
        borderColor: 'primary',
        borderWidth: '1px',
        borderRadius: '0.375rem',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem 1.75rem',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '500',
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#0A2C5A',
          borderColor: '#1B44C8',
        },
        '&:disabled': {
          backgroundColor: '#D1D5DB',
          borderColor: '#9CA3AF',
          color: '#4B5563',
        },
        '&:active': {
          backgroundColor: '#0A2C5A',
          borderColor: '#1B44C8',
        },
      };
    return (
      <>
      <button 
        style={buttonStyles}
        onClick={props.onClick}
        >
      {props.title}
    </button>
    </>
    )}

export default Button;
