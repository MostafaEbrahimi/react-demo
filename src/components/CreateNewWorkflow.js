import React from 'react'
import Tree from 'react-d3-tree'
import CartTitle from './CardTitle'
import { Layout,Select,Tag  ,Switch  } from 'antd';

const { Option, OptGroup } = Select;


const { Header, Footer, Sider, Content } = Layout;

const myTreeData = [
{
    name: 'Central Area',
    attributes: {
        Name: 'Worker Master',
        Position: 'Owner',
        Rate: '4',
    },
    children: [
    {
        name: 'Level 2: A',
        attributes: {
            Name: 'Worker Slave',
            Position: 'Owner',
            Rate: '5',
        },
        children: [
            {
                name: 'Level 3: A',
                attributes: {
                    Name: 'Worker Slave',
                    Position: 'Owner',
                    Rate: '9',
                },
            }
            
        ]
    },
    {
        name: 'Level 2: B',
        attributes: {
            Name: 'Worker Slave',
            Position: 'Owner',
            Rate: '6',
        },
    },
    ],
},
];

export default class CreateNewWorkflow extends React.Component{
    

    constructor(props){
        super(props)
        this.state = {
            clickedNode:null
        }
        this.nodeClicked = this.nodeClicked.bind(this)
    }

    nodeClicked(nodeData,evt){
        console.log(nodeData)
        this.setState({clickedNode: nodeData})
    }


    render(){
        return(
            <Layout>
                
                <Layout >
                    <CartTitle title="Create New Workflow"/>
                    <Content>
                    <div style={{width: '100%' , height: 400,overflow:'hidden'}}>
                        
                        <Tree data={myTreeData} onClick={(this.nodeClicked)}/>

                    </div>
                    </Content>
                    
                </Layout>
                <Sider style={{background:'#fff'}}>
                    <div style={{textAlign:'center',verticalAlign:'center',height:'100%'}}>
                        <h2 style={{color:"#000"}}>
                            {this.state.clickedNode && (<b>Selected Node</b>)}
                                <br/>
                            {this.state.clickedNode && this.state.clickedNode.name}
                        </h2>

                        {this.state.clickedNode && (
                            <Select
                            defaultValue="form1"
                            style={{ width: '70%',marginTop:40,marginBottom:40 }}
                          >
                            <OptGroup label="Type Form A">
                              <Option value="form1">Form 1</Option>
                              <Option value="form2">Form 2</Option>
                            </OptGroup>
                            <OptGroup label="Type Form B">
                              <Option value="form3">Form 3</Option>
                            </OptGroup>
                          </Select>
                        )}
                        {this.state.clickedNode && (
                        <div>
                            <div>
                                <Tag color="magenta">about1</Tag>
                                <Tag color="red">about2</Tag>
                                <Tag color="volcano">about3</Tag>
                                <Tag color="orange">about4</Tag>
                                <Tag color="gold">about5</Tag>
                                <Tag color="lime">about6</Tag>
                                <Tag color="green">about7</Tag>
                                <Tag color="cyan">about8</Tag>
                                <Tag color="blue">about9</Tag>
                                <Tag color="geekblue">about10</Tag>
                                <Tag color="purple">about11</Tag>
                            </div>

                            <div>
                                <Tag color="#f50">#worker1</Tag>
                                <Tag color="#2db7f5">#worker2</Tag>
                                <Tag color="#87d068">#worker3</Tag>
                                <Tag color="#108ee9">#worker4</Tag>
                            </div>
                        </div>
                        )}
                    </div>
                </Sider>
            </Layout>
        );
    }
}