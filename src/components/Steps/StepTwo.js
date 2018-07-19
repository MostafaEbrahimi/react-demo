import React from 'react'

import { Steps, Button, message
    ,Form, Input, Tooltip
    , Icon, Cascader, Select
    , Row, Col, Checkbox
    , AutoComplete } from 'antd'

    
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

export default class StepTwo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                        offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '021',
            })(
            <Select style={{ width: 70 }}>
                <Option value="021">021</Option>
                <Option value="071">071</Option>
            </Select>
        );
        return(
            
            <div >
                <Form onSubmit={this.handleSubmit} className="step-two-form">
                    <FormItem {...formItemLayout} label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                            required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
                                FullName&nbsp;
                                <Tooltip title="Enter Your Firstname and LastName here">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )}>
                        {getFieldDecorator('FullName', {
                            rules: [{ required: true, message: 'Please input your FullName!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Phone Number">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        )}
                    </FormItem>
                </Form>
            </div>

        );
    }
}