import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const [product, setproduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setproduct(res.data))
    },[])
    return (
        <div>
            <h1>{product.Title}</h1>
            <p>{product.Price}</p>
            <p>{product.Desc}</p>
        </div>
    )
}
