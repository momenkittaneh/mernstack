import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import { useEffect,useState } from 'react';

export default props => {
    const [Products,setProduct] = useState([])
    useEffect(() => {
      axios.get('http://localhost:8000/api/products')
      .then(res => {
          setProduct(res.data);
      })
  })
console.log(Products)
    
    return (
        <div>
            {Products.map((Products, idx) => {
                return <h3 key={idx}><Link to={`/${Products._id}`}>{Products.title}</Link></h3>
            })}
        </div>
    )
}