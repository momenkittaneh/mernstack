import React from 'react'

function Sucsess(probs) {
    return (
        <div>
            <h1>hello</h1>
            {probs.de.map((item,i) =>
                {
                   return <div style = {{background:item, width:'300px' ,height:'300px'}}>{item}</div>
                })}
        </div>
    )
}

export default Sucsess
