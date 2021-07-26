import React from 'react'

function styleroute(props) {
    let num = false
    if (isNaN(+props.nano)){
        num=true
    }
    return (
        <div style={{background:props.bacol,height:'100px'}}>
            {num ?
               <h1 style={{color:props.fontco}}>   the word is :{props.nano}</h1>
                :
                 <h1 style={{color:props.fontco}}> the number is :{props.nano}</h1>}
                
            

        </div>
    )

}

export default styleroute
