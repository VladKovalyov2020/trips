import React from 'react';

// Modules

import types from 'prop-types';
import classnames from 'classnames';

// Styles

import './styles.scss';

// ----------------

export const FieldLabel = props => {
  const {
    blockTitle,
    withError,
    subLabel,
    children,
    status: { error, des },
    label,
    id = '',
  } = props;

  const fieldClass = classnames({
    'field-label': true,
    'field-label--with-error': withError,
  });

  const labelClass = classnames({
    'field-label__label': true,
    'field-label__label--block': blockTitle,
  });

  return (
    <div className={fieldClass} id={id}>
      {(label || subLabel) && (
        <div className={labelClass}>
          <p className="label">{label}</p>

          {subLabel && <p className="sub-label">{subLabel}</p>}
        </div>
      )}

      {children}

      {withError && error && des && (
        <div className="field-label__des">
          <p className="error-text">{des}</p>
        </div>
      )}
    </div>
  );
};

// Type of props

FieldLabel.propTypes = {
  blockTitle: types.bool,
  withError: types.bool,
  subLabel: types.string,
  children: types.node.isRequired,
  label: types.string,
};

// Default value for props

FieldLabel.defaultProps = {
  withError: true,
  status: {},
};
