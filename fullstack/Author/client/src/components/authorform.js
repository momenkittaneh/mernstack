import React ,{useState} from 'react'
import { Link,navigate } from '@reach/router'

export default props => {
    const {initialname,onSubmitProp} = props
    const [name, setName] = useState(initialname)
    const onSubmitHandler =() =>{
        onSubmitProp({name})
    }
    return (
        <form onSubmit = {onSubmitHandler}>
            <tr>
                <td><label>Name</label></td>
                <td>
                    <input type="text" name="Name" value={name} onChange={(e)=>setName(e.target.value)}  />
                </td>
                <button onClick={()=> {navigate("/")}}  >cancel</button>
                <input type = "submit" />
                
            </tr>
        </form>
        )
}
