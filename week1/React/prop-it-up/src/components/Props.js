import React, { useState } from 'react'


const Props = props => {
    const[count, setCount] = useState(0);
    
    const incrementCount = () =>{
        setCount(baha => baha +1)
    }

return (
    <div>
        <h1></h1>
        <p>Age: {count}</p>
        <button onClick={incrementCount}>Birthday button</button>
        
    </div>
)
}



export default Props
