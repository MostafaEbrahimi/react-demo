import React, {Component} from 'react'
import {render} from 'react-dom'
import {Launcher} from 'react-chat-window'
import messageHistory from './messageHistory'
import {Collapse } from 'antd'
import CartTitle from './CardTitle'

const Panel = Collapse.Panel

const text = `
    Iran is an Islamic republic on the Persian (Arabian)
    Gulf with historical sites dating to the Persian Empire.
    Extensive marble ruins mark Persepolis, the empire’s capital 
    founded by Darius I in the 6th century B.C. The modern capital,
    Tehran, is home to opulent Golestan Palace, seat of the Qajar Dynasty 
    (1794–1925), plus modern landmarks such as the 435m-high Milad Tow
`;

export default class Support extends React.Component{
    

    

    constructor() {
        super();
        this.state = {
          
        };
    }
     
   
     
    render() {
        return (
        <div>
            <CartTitle title="Questions And Answers"/>
            <Collapse defaultActiveKey={['1']}>
                <Panel  header="This is Question 1" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is Question 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel  forceRender={true} header="This is Question 3" key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        </div>
        )
    }
}