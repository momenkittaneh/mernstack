// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { navigate } from '@reach/router';
// import DeleteButton from '../components/DeleteButton';
// import ProductsForm from '../components/ProductForm';
// export default props => {
//     const { id } = props;
//     const [product, setproduct] = useState();
//     const [loaded, setLoaded] = useState(false);
//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/products/${id}`)
//             .then(res => {
//                 setproduct(res.data);
//                 setLoaded(true);
//             })
//     }, [])
//     // const updateproduct = product => {
//     //     axios.put(`http://localhost:8000/api/products/update/${id}`, product)
//     //         .then(res => console.log(res));
//     // }
//     const updateproduct = (product) => {
//         axios.put(`http://localhost:8000/api/products/update/${id}`, product)
//         .then(res => console.log(res));
//     }

//     return (
//         <div>
//             <h1>Update a product</h1>
//             {loaded && (
//                 <>
                    
//                                         <ProductsForm 
//                     onSubmitProp={updateproduct}
//                     initialTitle={product.Title}
//                     initialPrice={product.Price}
//                     initialDescription={product.Desc}
//                     />

                    
//                     <DeleteButton productId={product._id} successCallback={() => navigate("/")} />

//                 </>
//             )}
//         </div>
//     )
// }


// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import {Link, navigate} from '@reach/router'
// import ProductForm from '../components/ProductForm'
// import DeleteButton from '../components/DeleteButton';

// export default props => {

//     const {id} = props;
//     const [product, setProduct] = useState();
//     const [loaded, setLoaded] = useState(false)

//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/products/${id}`)
//         .then(res => {
//             setProduct(res.data);
//             setLoaded(true);
//         })
//     }, []);

//     const updateProduct = (prod) => {
//         axios.put(`http://localhost:8000/api/products/${id}`, prod)
//         .then(res => console.log(res));
//     }

//     return (
//         <div>
//             <h1>Update a Product</h1>
//             {loaded && (
//                 <div>
//                     <ProductForm 
//                     onSubmitProp={updateProduct}
//                     initialTitle={product.title}
//                     initialPrice={product.price}
//                     initialDescription={product.description}
//                     />
//                     <DeleteButton 
//                     productId={product._id} 
//                     successCallback={() => navigate("/")} 
//                     />
//                 </div>
//             )}
//             <br/><br/><Link to={`/`}>Home</Link>
//         </div>
//     )
// }
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router'
import ProductForm from '../components/ProductForm'
import DeleteButton from '../components/DeleteButton';

export default props => {

    const {id} = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        })
    }, []);

    const updateProduct = (prod) => {
        axios.put(`http://localhost:8000/api/products/${id}`, prod)
        .then(res => console.log(res));
    }

    return (
        <div>
            <h1>Faviourte authors</h1>

            {loaded && (
                <div>
                    <ProductForm 
                    onSubmitProp={updateProduct}
                    initialTitle={product.Title}
                    initialPrice={product.Price}
                    initialDescription={product.Desc}
                    />
                    <DeleteButton 
                    productId={product._id} 
                    successCallback={() => navigate("/")} 
                    />
                </div>
            )}
            <br/><br/><Link to={`/`}>Home</Link>
        </div>
    )
}