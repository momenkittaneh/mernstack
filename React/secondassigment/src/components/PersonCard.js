import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    increseAge = () => {
        this.setState({
            age : this.state.age +=1

        });
    }
    render() {
        const { firstname, lastname,hair } = this.props;

        return (
            <div>
                <h1>{firstname},{lastname}</h1>
                <h3>Age:{this.state.age}</h3>
                <h3>Hair color:{hair}</h3>
                <fieldset>
                <button onClick={ this.increseAge }>Flip Switch</button>
                            </fieldset>

            </div>
        )
    }
    
}

export default PersonCard
