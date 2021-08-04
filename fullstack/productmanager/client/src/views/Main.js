import PersonForm from '../components/ProductForm';
import { useEffect,useState } from 'react';
import Allproducts from '../components/allproducts'
import axios from 'axios';

export default() => {

    return (
        <div>
           <PersonForm/>
            <Allproducts/>
        </div>
    )
}
