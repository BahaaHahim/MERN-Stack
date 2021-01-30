import React, { Component } from 'react'

class Props extends Component {
    constructor(props){
        super(props);
            this.state={
                age : this.props.age,
            }
    }
    clickHandelr=()=> {
        this.setState({
            age: this.state.age +1
        });
    }
    render() {
        return (
            <div>
                <h1>{this.props.lastname} , {this.props.firstname}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair color : {this.props.haircolor}</p>
                <button onClick={this.clickHandelr}>Birthday button for {this.props.firstname}{this.props.lastname}</button>
                
            </div>
        )
    }
}

export default Props
