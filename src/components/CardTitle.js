import React from 'react'

export default class CardTitle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return(
            <div style={{borderTopLeftRadius:'2px',borderTopRightRadius:'2px',backgroundColor:'#545556',minHeight:60,padding:10}}>
                <h2 style={{color:'#fff'}}>{this.props.title}</h2>
            </div>

        );
    }
}