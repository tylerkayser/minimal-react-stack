import Button from '../common/button'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { ping } from './home.actions'

const HomeButton = connect(
  state => ({
    label: state.home.pingPong
  }),
  dispatch => ({
    onClick: () => dispatch(ping())
  })
)(Button)

export default HomeButton
