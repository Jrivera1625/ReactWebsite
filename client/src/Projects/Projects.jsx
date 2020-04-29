import React, { Component } from "react";
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardActions,
    Button,
    CardMenu,
    IconButton,
    CardText
} from "react-mdl";

import Resume from "../Resume";
import ElectricalProjects from "./ElectricalProjects/ElectricalProjects";
import SoftwareProjects from "./SoftwareProjects/SoftwareProjects";

import "antd/dist/antd.css";
import { Menu, Dropdown, Breadcrumb, Layout } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, LaptopOutlined, UserOutlined, NotificationOutlined } from '@ant-design/icons';
import GitProjects from './SoftwareProjects/GitProjects';
import WindTurbine from './ElectricalProjects/WindTurbine'
import ReflowOvenController from './ElectricalProjects/ReflowOvenController'
import MFControlRobot from './ElectricalProjects/MFControlRobot'

import { injectIntl, IntlProvider } from 'react-intl'
//import { Menu as SubMenu} from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            current: 'mail',
            activeKey: "WindTurbine"
        };
    }



    toggleCategories() {
        if (this.state.activeKey == "WindTurbine") {
            return <WindTurbine />;
        } else if (this.state.activeKey == "GitProjects") {
            return (<IntlProvider locale="en" ><GitProjects /></IntlProvider>);
        }
        else if (this.state.activeKey == "TeamProjects") {
            return <div> In Progress </div>
        }
        else if (this.state.activeKey == "Robot") {
            return <MFControlRobot />
        }
        else if (this.state.activeKey == "OvenController") {
            return <ReflowOvenController />
        }

    }

    handleClick = e => {
        this.setState({ activeKey: e.key })
        console.log(this.state.activeKey)
    };


    render() {

        return (
            <Layout style={{ height: "100%" }}>
                <Layout>
                    <Sider width={250} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['GitProjects']}
                            defaultOpenKeys={['sub1']}
                            onClick={this.handleClick}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <LaptopOutlined />
                                        Software
                    </span>
                                }
                            >
                                <Menu.Item key="GitProjects">Git Projects</Menu.Item>
                                <Menu.Item key="TeamProjects">Team Projects</Menu.Item>

                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <SettingOutlined />
                                        Electrical
                    </span>
                                }
                            >
                                <Menu.Item key="WindTurbine">Power Tracking Wind Turbine</Menu.Item>
                                <Menu.Item key="Robot">MF Controlled Robot </Menu.Item>
                                <Menu.Item key="OvenController">Reflow Oven Controller </Menu.Item>

                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.toggleCategories()}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default Projects;
