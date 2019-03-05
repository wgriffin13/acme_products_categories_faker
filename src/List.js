import React from 'react'
import Button from 'react-bootstrap/Button'
import Products from './Products'

const List = ({categories, createProduct, deleteCategory, deleteProduct}) => {

    return (
        categories.map(category => {
            return (
                <li key={category.id} className="list-group-item">{category.name}
                    <div style={{float: "right"}}>
                        <Button onClick={() => createProduct(category.id)} variant="primary">+</Button>
                        <Button onClick={() => deleteCategory(category.id)}variant="danger">-</Button>
                    </div>
                    <br clear="all"></br>
                    <ul className="list-group" style={{marginTop: "10px"}}>
                        <Products subProducts={category.products} deleteProduct={deleteProduct} />
                    </ul>
                </li>
            )
        })
    )

}

export default List
