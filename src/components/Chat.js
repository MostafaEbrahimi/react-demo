import React from 'react'
import {render} from 'react-dom'
import {Launcher} from 'react-chat-window'
import messageHistory from './messageHistory'

export default class Chat extends React.Component{
    
    constructor() {
        super();
        this.state = {
          messageList: messageHistory
        };
    }
     
    _onMessageWasSent(message) {
        this.setState({
          messageList: [...this.state.messageList, message]
        })
    }
     
    _sendMessage(text) {
        if (text.length > 0) {
          this.setState({
            messageList: [...this.state.messageList, {
              author: 'them',
              type: 'text',
              data: { text }
            }]
          })
        }
    }
     
    render() {
        return (
        <div>
        <Launcher
            agentProfile={{
            teamName: 'Me and Me Group',
            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
            }}
            onMessageWasSent={this._onMessageWasSent.bind(this)}
            messageList={this.state.messageList}
            showEmoji
        />
        </div>
        )
    }
}