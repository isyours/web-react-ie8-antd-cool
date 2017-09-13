require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('fetch-ie8');


import { Layout, Menu, Row, Col  } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;
const React = require('react');
const ReactDOM = require('react-dom');



class App extends React.Component{
    render(){
        return(
            <Layout>
                <div className="logo-p">
                    <div className="logo-i">
                        <div className="logo" >
                            <span className="logo-name">{"禹顺防水"}</span>
                            <span className="logo-slogan">{" -- 打造龙江防水第一品牌"}</span>
                        </div>
                    </div>
                </div>
                <Header style={{ width: '100%' }}>
                    <div className="main-content">
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['4']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">
                                <a href="/index.html">首页</a></Menu.Item>
                            <Menu.Item key="2">
                                <a href="/company.html">公司简介</a>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <a href="/projects.html">工程项目</a>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <a href="/contact.html">联系我们</a>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Header>
                <Content>
                    <div className="main-content">
                        <div style={{ background: '#c6ddf1'}}>
                            <Row style={{ background: '#fff', minHeight: 380 }} gutter={16}>
                                <Col span={4} style={{minHeight: 380, padding: 0, borderRight: "2px solid #252a1e"}} className="gutter-row">
                                    <div className="content-nav">
                                        <h2>工程展示</h2>
                                    </div>
                                </Col>
                                <Col span={1}>
                                    <div>&nbsp;</div>
                                </Col>
                                <Col span={5}>
                                    <div className="row-title">
                                        <h2>屋顶防水</h2>
                                    </div>
                                    <div className="row-content">
                                        <img className="snapshot" src={"/images/roof.jpg"} />
                                    </div>
                                </Col>
                                <Col span={2}>
                                    <div>&nbsp;</div>
                                </Col>
                                <Col span={5}>
                                    <div className="row-title">
                                        <h2>室内防水</h2>
                                    </div>
                                    <div className="row-content">
                                        <img className="snapshot" src={"/images/inhouse.jpg"} />
                                    </div>
                                </Col>
                                <Col span={2}>
                                    <div>&nbsp;</div>
                                </Col>
                                <Col span={5}>
                                    <div className="row-title">
                                        <h2>地下防水</h2>
                                    </div>
                                    <div className="row-content">
                                        <img className="snapshot" src={"/images/underg.jpg"} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Content>
                <Footer>
                    <div className="main-content" style={{ textAlign: 'center' }}>
                        Design by <a href="https://www.gkwen.com">Gkwen</a>
                    </div>
                </Footer>
            </Layout>
        )
    }
}



ReactDOM.render(<App/>,document.getElementById('project'));
