import React from 'react'

class SampleMessage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div>Hello {this.props.messssage}!</div>
    }
}

export default SampleMessage