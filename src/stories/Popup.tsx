import React, { useState } from "react";
import PopupContent from "./PopupContent";
import Buttonitems from './Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


export interface PopupProps {
  id: number;
  title: string;
  children?: any;
  buttonTitle: string;
  buttonFunction?: () => void;
  slide?: 'up' | 'down' | 'right' | 'left';
}
const Popup = ({ id, title, children, buttonTitle, buttonFunction, slide }: PopupProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleClose = () => {
    setModalOpen(false);
  };
  const handleopen = () => {
    setModalOpen(true);
  };
  return (
    <div className=" mx-auto py-20">
      <button
        onClick={handleopen}
        // className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
      >
        Open Modal
      </button>
     { modalOpen && 
          <PopupContent
            {...{ id, title, children, buttonTitle,slide }} 
            modalOpen={modalOpen} 
            handleClose={handleClose} 
            buttonFunction={buttonFunction}
            />
      }
    </div>
  );
};
export default Popup;