import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	

	return ReactDOM.createPortal(
		<div onClick={props.onClose} className="modal-dim">
			<div className="modal-body">
				<span className="modal__text modal__text--title">{props.title}</span>
				<span className="modal__text modal__text--body">{props.textBody}</span>
				<div className="modal__button-container">{props.actions}</div>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;