import React from 'react'

export default class ContentContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return(
            <div style={{padding:20}}>
                {this.props.children}
            </div>
        );
    }
}