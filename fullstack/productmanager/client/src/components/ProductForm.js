import React, { useState } from 'react'
import axios from 'axios';
export default props  => {
    const {initialTitle,initialPrice,initialDescription,onSubmitProp} =props
    //keep track of what is being typed via useState hook
    const [Title, setTitle] = useState(initialTitle);
    const [Price, setPrice] = useState(initialPrice);
    const [Desc, setDesc] = useState(initialDescription);
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        // axios.post('http://localhost:8000/api/products', {
            // Title,
            // Price,
            // Desc
            onSubmitProp({Title,Price,Desc})
        }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" name="Title" value={Title} onChange={(e)=>setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" name="Price" value={Price} onChange={(e)=>setPrice(e.target.value)}/>
            </p><p>
                <label>Description</label><br/>
                <input type="text" name="Desc" value={Desc} onChange={(e)=>setDesc(e.target.value)}/></p>
            <input type="submit"/>
        </form>
    )
}
