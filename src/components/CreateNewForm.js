import React from 'react'
import { Form, Steps, Button, message,notification } from 'antd'
import CartTitle from './CardTitle'
import Container from './ContentContainer'
import ReadDoc from './Steps/StepOne'
import FillForm from './Steps/StepTwo'
import SubmitForm from './Steps/StepThree'




const WrappedfillForm = Form.create()(FillForm);

const steps = [{
    title: 'Read Doc',
    content: (<ReadDoc/>),
  }, {
    title: 'Fill Form',
    content: (<WrappedfillForm/>),
  }, {
    title: 'Submit Form',
    content: (<SubmitForm/>),
}];

const Step = Steps.Step;
export default class CreateNewForm extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            current: 0,
        };
    }

    openNotificationWithIcon(type) {
        notification[type]({
          message: 'Notification Title',
          description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    }

    next() {
        const current = this.state.current + 1
        this.setState({ current })
    }
    
    prev() {
        const current = this.state.current - 1
        this.setState({ current })
    }

    success() {
        this.openNotificationWithIcon('success')
        const current = 0
        this.setState({current})
    }
    
    

    render() {
        const { current } = this.state;
    
        return(
            <div>
                <CartTitle title="Submit A Form"/>
                <Container>
                    <Steps current={current}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                    <div className="steps-content">{steps[current].content}</div>    
                    <div style={{textAlign:'center',marginTop:20}} className="steps-action">
                        {
                            current < steps.length - 1
                            && <Button type="primary" onClick={() => this.next()}>Next</Button>
                        }
                        {
                            current === steps.length - 1
                            && <Button type="primary" onClick={() => this.success()}>Done</Button>
                        }
                        {
                            current > 0
                            && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Previous
                            </Button>
                            )
                        }
                    </div>
                </Container>
            </div>
        );
    }
}