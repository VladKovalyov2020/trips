import React, { useEffect } from 'react';

// Modules

import { createPortal } from 'react-dom';
import types from 'prop-types';
import classNames from 'classnames';

// Components

import { ModalHeader } from './ModalHeader';

// Styles

import './styles.scss';

// ----------------

export const Modal = props => {
  const {
    bodyHeight,
    noPadding,
    closeIcon = true,
    children,
    onClose,
    width = 'sm',
    title,
    open,
  } = props;

  useEffect(() => {
    const press = () => {
      console.log('keyPress');
    };

    document.addEventListener('keyPress', press);

    return () => {
      document.removeEventListener('keyPress', press);
    };
  }, [open]);

  const modalClass = classNames({
    modal: true,
    'modal--open': open,
  });

  const modalContent = classNames({
    modal__content: true,
    [`modal__content--width-${width}`]: width,
    [`modal__content--body-height-${bodyHeight}`]: bodyHeight,
  });

  const modalBodyClass = classNames({
    modal__body: true,
    'modal__content--no-padding': noPadding,
  });

  return createPortal(
    open ? (
      <div className={modalClass}>
        <div className={modalContent}>
          {(title || (closeIcon && onClose)) && (
            <ModalHeader onClose={onClose} title={title} />
          )}

          <div className={modalBodyClass}>{children}</div>
        </div>

        <div className="modal__backdrop" onClick={onClose} />
      </div>
    ) : null,
    document.body
  );
};

// Type of props

Modal.propTypes = {
  bodyHeight: types.string,
  noPadding: types.number,
  closeIcon: types.bool,
  children: types.node.isRequired,
  onClose: types.func,
  title: types.string,
  open: types.func,
};

// Default value for props

Modal.defaultProps = {
  width: 'sm',
};
