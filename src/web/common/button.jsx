import React, { PropTypes } from 'react'

const Button = ({ label, onClick }) => (
  <button onClick={() => onClick()}>
    {label || 'Click me'}
  </button>
)

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button
