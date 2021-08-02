import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import { useEffect,useState } from 'react';

export default props => {
//     const [Products,setProduct] = useState([])
//     useEffect(() => {
//       axios.get('http://localhost:8000/api/products')
//       .then(res => {
//           setProduct(res.data);
//       })
//   })    
    return (
        <div>
        {props.Products.map((product, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`/${product._id}`}>
                            <h3>{product.Title}</h3> 
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}