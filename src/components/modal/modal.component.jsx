import React from 'react';

import CancelIcon from '@material-ui/icons/Cancel';

import './modal.style.css';

const Modal = ({ handleClose, children }) => {
  return (
    <div className="modal">
      <div className="modalCard">
        <div className="modalContent">
          <span className="modalContent__closeBtn" onClick={handleClose}>
            <CancelIcon />
          </span>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
