import { useState } from 'react';

function Product(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.img} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p>{props.color || props.model}</p>
                <h6 className="card-text">{props.brand}</h6>
                <a href="#" className="btn btn-primary">{props.price}</a>
            </div>
        </div>
    )

}

export default Product