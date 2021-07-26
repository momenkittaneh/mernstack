import React,{useState} from 'react'

function Tabs() {
    const [text,settext] = useState('hello')
    
    const showtab =(i) =>{
        
        if (i===1){
            settext("this is tab1");
        }
        else if(i===2){
            settext("this is tab2");
        }
        else{
            settext("this is tab3");
        }
    }
    
    return (
        <>
            <button onClick={()=>showtab(1)}>tab1</button>
            <button onClick={()=>showtab(2)}>tab2</button>
            <button onClick={()=>showtab(3)}>tab3</button>
            <div style={{width:'500px',height:'500px'}}>{text}</div>
        </>
    )
}


export default Tabs;
