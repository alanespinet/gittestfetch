import React from 'react';
import ReactModal from 'react-modal'

const ReservationSuccess = (props) => (
  <ReactModal
    ariaHideApp={false}
    isOpen = {props.show}
    shouldCloseOnOverlayClick={false}
    shouldCloseOnEsc={false}
    overlayClassName="reservation-success-overlay"
    className="reservation-success-content"
  >
    <div className="reservation-success-modal-content" style={{ backgroundImage: "url(/images/bg_bottom.png)" }}>
      { props.children }
      <button onClick={props.closeModal}>Got it!</button>
    </div>
  </ReactModal>
);

export default ReservationSuccess;
