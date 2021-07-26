import React from 'react'
function Firstroute(props) {
    let num = false
    if (isNaN(+props.nano)){
        num=true
    }
    return (
        <>
            {num ?
               <p>   the word is :{props.nano}</p>
                :
                 <p> the number is :{props.nano}</p>}
                
            

        </>
    )
}

export default Firstroute
