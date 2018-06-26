import React from 'react';
import ReactModal from 'react-modal'

const ReservationSuccess = (props) => (
  <ReactModal
    ariaHideApp={false}
    isOpen = {props.show}
    shouldCloseOnOverlayClick={false}
    shouldCloseOnEsc={false}
    overlayClassName="reservation-failed-overlay"
    className="reservation-failed-content"
  >
    <div className="reservation-failed-modal-content" style={{ backgroundImage: "url(/images/bg_bottom.png)" }}>
      { props.children }
      <button onClick={props.closeModal}>Try again!</button>
    </div>
  </ReactModal>
);

export default ReservationSuccess;
