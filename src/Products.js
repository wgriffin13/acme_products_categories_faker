import React from 'react'
import Button from 'react-bootstrap/Button'

const Products = ({subProducts, deleteProduct}) => {

    return (
        subProducts.map(product => {
            return (
                <li key={product.id} className="list-group-item">{product.name}
                    <div style={{float: "right"}}>
                        <Button onClick={() => deleteProduct(product.id)} variant="danger">-</Button>
                    </div>
                </li>
            )
        })
    )

}

export default Products
