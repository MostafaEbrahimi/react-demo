import React from 'react'
import './index.css'
import './App.css'
import { Row, Col,Layout,Button ,Affix } from 'antd'
import HeaderMenu from './components/HeaderMenu'
import CreateNewWorkflow from './components/CreateNewWorkflow'
import CreateNewForm from './components/CreateNewForm'
import Support from './components/Questions'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Chat from './components/Chat'

class App extends React.Component {
  render(){
    const { Header, Footer, Content } = Layout;

    const steps = [
      {
        id: '0',
        message: 'Welcome to react chatbot!',
        trigger: '1',
      },
      {
        id: '1',
        message: 'Bye!',
        end: true,
      },
    ];
     
    
    return (
      <Router>
        <div>
          
          <Layout>
            
            <HeaderMenu/>
            
            <Content  style={{ background: '#FFF'}}  >  
              <Row >
                <Col style={{borderWidth:'1px',borderStyle:'solid',borderColor: '#ebedf0',borderRadius:'2px' ,background: '#fff', minHeight: 400,marginTop: 20 }} span={18} offset={3}>
                  <Route exact path="/newworkflow" component={CreateNewWorkflow} />
                  <Route path="/newform" component={CreateNewForm} />
                  <Route path="/support" component={Support} />
                </Col>
              </Row>
              
            </Content>
            {/* <Footer>Footer</Footer> */}
          </Layout>
          <Chat/>
        </div>
      </Router>
    );  
  }
}
export default App;
