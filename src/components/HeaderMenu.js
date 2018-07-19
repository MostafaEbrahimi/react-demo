import React from 'react'
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class HeaderMenu extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            current: 'mail',
        }
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

    render(){
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;
        return(
                <Menu
                    style={{ textAlign: 'center' }}
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="main">
                        <Link to='/newworkflow'>
                            <Icon type="file" />Create New Workflow
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="aboutus">
                        <Link to='/newform'>
                            <Icon type="form" />Create New Form
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="more">
                        <Link to='/support'>
                            <Icon type="wechat" />Support
                        </Link>
                    </Menu.Item>
                
                </Menu>
        );
    }
}