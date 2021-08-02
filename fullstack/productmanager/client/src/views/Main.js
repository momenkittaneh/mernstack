import PersonForm from '../components/ProductForm';
import { useEffect,useState } from 'react';
import Allproducts from '../components/allproducts'
import axios from 'axios';

export default() => {
    const [Products,setProduct] = useState([])
    const [loadded,setLoaded] = useState('')
    useEffect(() => {
      axios.get('http://localhost:8000/api/products')
      .then(res => {
          setProduct(res.data);
          setLoaded(true)})
            .catch(console.log("failed"))

  })
    return (
        <div>
           <PersonForm/>
           {loadded && <Allproducts Products={Products}/>} 
        </div>
    )
}
