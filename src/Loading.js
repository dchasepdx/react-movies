import React from 'react'

function Loading(props) {
  if(props.loading === true) {
    return <h1>Loading</h1>
  } else {
    return null
  }
}

module.exports = Loading;