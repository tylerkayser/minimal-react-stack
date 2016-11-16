import Button from './Button'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { ping } from './actions'

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => (
  {
    onClick: () => dispatch(ping())
  }
)

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default ButtonContainer
