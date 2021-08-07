import PersonForm from '../components/ProductForm';
import { useEffect,useState } from 'react';
import Allproducts from '../components/allproducts'
import axios from 'axios';

export default() => {

    const [product, setProduct] = useState([]);

    const createProduct = prod => {
        axios.post(`http://localhost:8000/api/products`, prod)
        .then(res => {
            setProduct([...product, res.data])
        })
    }

    return (
        <div>
           <PersonForm
                       onSubmitProp={createProduct}
                       initialTitle=""
                       initialPrice=""
                       initialDescription=""
           />
            <Allproducts/>
        </div>
    )
}
