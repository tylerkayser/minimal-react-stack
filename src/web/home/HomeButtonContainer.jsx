import Button from '../common/Button'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { ping } from './home-actions'

const HomeButtonContainer = connect(
  state => ({
    label: state.home.pingPong
  }),
  dispatch => ({
    onClick: () => dispatch(ping())
  })
)(Button)

export default HomeButtonContainer
