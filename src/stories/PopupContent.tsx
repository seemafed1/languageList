import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button, { Buttonitems } from "./Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Popup from "./Popup";
import React from 'react';
export interface PopupContentProps {
  id?: number;
  title: string;
  children?: React.ReactNode;
  buttonTitle: string;
  buttonFunction?: () => void;
  slide?: 'up' | 'down' | 'right' | 'left';
  modalOpen: boolean;
  handleClose: () => void; // Default function for closing the popup
}
const PopupContent = ({slide = 'down' ,modalOpen,handleClose,...props}:PopupContentProps) => {
  
  
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction={slide} ref={ref} {...props} />;
  });
  const handleButtonFunction = () => {
    return !props.buttonFunction ? handleClose() : props.buttonFunction()
  };

  return (
          <Dialog
        open={modalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
            open={modalOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
        <DialogTitle>
          <div className="flex gap-2">
            <button onClick={handleClose}>
            <KeyboardBackspaceIcon  />
            </button>
            <h3>{props.title}</h3>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p>{props.children}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
                <Button title={props.buttonTitle} onClick={handleButtonFunction}  />
        </DialogActions>
      </Dialog>
  );
};
export default PopupContent;