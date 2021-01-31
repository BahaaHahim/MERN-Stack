import React, { useState } from 'react'


const Props = props => {
    const[count, setCount] = useState(0);
    
    const incrementCount = () =>{
        setCount(baha => baha +1)
    }




return (
    <div>
        {/* <h1>{this.props.lastname} , {this.props.firstname}</h1> */}
        <p>Age: {count}</p>
        {/* <p>Hair color : {this.props.haircolor}</p> */}
        <button onClick={incrementCount}>Birthday button</button>
        
    </div>
)
}



export default Props
