import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import { useEffect,useState } from 'react';
import DeleteButton from './DeleteButton';
export default props => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])
    const removeFromDom = productId => {
        setProducts(Products.filter(product => product._id != productId))
    }

    return (
        <div>
        {Products.map((product, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`/product/${product._id}`}>
                            <h3>{product.Title}</h3> 
                        </Link>
                        <Link to={"/product/" + product._id + "/edit"}>
                            Edit
                        </Link> 
                        <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>

                    </div>
                )
            })}
        </div>
    )
}