import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'

class Main extends React.Component {

  render () {
    return (
      <div>
        <h2>Acme Categories and Products <em>by faker</em></h2>
        <Button variant="primary">Create Category</Button>
      </div>
    )
  }
}

ReactDOM.render(
    <Main />,
    document.getElementById('app')
  )
