require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('fetch-ie8');


import { Layout, Menu, Breadcrumb  } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;
const React = require('react');
const ReactDOM = require('react-dom');


function onChange(checked) {
  console.log(`switch to ${checked}`);
}


class App extends React.Component{
    render(){
        return(
            <Layout>
                <Header style={{ position: 'fixed', width: '100%' }}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">首页</Menu.Item>
                        <Menu.Item key="2">公司简介</Menu.Item>
                        <Menu.Item key="3">工程项目</Menu.Item>
                        <Menu.Item key="4">联系我们</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}



ReactDOM.render(<App/>,document.getElementById('app'));
