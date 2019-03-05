import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import List from './List'
import axios from 'axios'

export default class Main extends React.Component {

  constructor() {
    super()
    this.deleteProduct = this.deleteProduct.bind(this)
    this.deleteCategory = this.deleteCategory.bind(this)
    this.createProduct = this.createProduct.bind(this)
    this.createCategory = this.createCategory.bind(this)
    this.state = {
      categories: []
    }
  }

  deleteProduct (productId) {
    axios.delete('/api/products/' + productId)
        .then(() => {
            axios.get('/api/categories')
            .then(response => response.data)
            .then(data => {
                this.setState({categories: data})
            })
        })
  }

  deleteCategory (catId) {
    axios.delete('/api/categories/' + catId)
        .then(() => {
            axios.get('/api/categories')
            .then(response => response.data)
            .then(data => {
                this.setState({categories: data})
            })
        })
  }

  createProduct (catId) {
      axios.post('/api/categories/' + catId + '/products')
        .then(() => {
            axios.get('/api/categories')
            .then(response => response.data)
            .then(data => {
                this.setState({categories: data})
            })
        })
  }

  createCategory () {
    axios.post('/api/categories')
      .then(() => {
        axios.get('/api/categories')
          .then(response => response.data)
          .then(data => {
            this.setState({categories: data})
          })
      })
  }

  componentDidMount () {
    axios.get('/api/categories')
      .then(response => response.data)
      .then(data => {
        this.setState({categories: data})
      })
  }

  render () {
    return (
      <div>
        <h2>Acme Categories and Products <em>by faker</em></h2>
        <Button onClick={() => this.createCategory()} variant="primary" style={{marginBottom: "10px"}}>Create Category</Button>
        <ul className="list-group">
            <List categories={this.state.categories} createProduct={this.createProduct} deleteCategory={this.deleteCategory} deleteProduct={this.deleteProduct} />
        </ul>
      </div>
    )
  }
}

