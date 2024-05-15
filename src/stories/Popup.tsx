import React, { useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './popup.css'
import { Dialog } from "@mui/material";

type Props = {
  title: string,
  childTitle: string,
  confirm: () => void
}
const Popup = ({ title, childTitle, confirm }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  
  return (
    <div>
      <button type="button" className="popup-button" onClick={()=> setOpen(true)}>Click here</button>
      {
          open && <Dialog open={open} onClose={() => setOpen(false)}>
            <div className="popup">
                  <div className="popup-tag">
                    <h2>{title}</h2>
                    <p>{childTitle}</p>
                  </div>
                  <div className="buttons">
                    <button
                      onClick={confirm}
                      className="popup-button"
                    >
                      Confirm
                    </button>
                    <button
                     onClick={()=> setOpen(false)}
                      className="popup-btn"
                    >
                      Go Back
                    </button>
                  </div>
              </div>
          </Dialog>
        }
    </div>
  );
};
export default Popup;