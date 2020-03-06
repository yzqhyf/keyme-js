import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal=({children, onOpen, onClose})=> {
    const modalRoot=document.getElementById('modal');
    const elementRoot=document.createElement('div');

    useEffect(()=> {
        modalRoot.appendChild(elementRoot);

        return ()=> {
            modalRoot.removeChild(elementRoot);
        }
    });

    const modalElement=()=>{
        return (
            <div className='modal-box'>
                <div className='modal-content'>
                    <div className='close-modal' onClick={onClose}>X</div>
                    {children}
                </div>
            </div>
        );
    }

    return (
        onOpen ? createPortal(modalElement(), elementRoot) : null
    );

};

Modal.proptypes={
    onOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal;