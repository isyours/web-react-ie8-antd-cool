require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('fetch-ie8');


import { Layout, Menu, Carousel, Row, Col  } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;
const React = require('react');
const ReactDOM = require('react-dom');


class App extends React.Component{
    render(){
        const carouselContent = {
            phone: "联系电话：13810411101",
            addr: "公司地址：黑龙江省哈尔滨市火车站"
        };
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
                            defaultSelectedKeys={['1']}
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
                        <Carousel effect="fade" autoplay autoplaySpeed={3500} >
                            <div className="basic-carousel-content">
                                <div className="basic-carousel-content-text">
                                    <p className="basic-carousel-content-text-slogan">
                                        专业防水，找禹顺
                                    </p>
                                    <p>{carouselContent.phone}</p>
                                    <p>{carouselContent.addr}</p>
                                </div>
                                <div className="basic-carousel-content-image">
                                    <img src={"/images/2.jpg"} />
                                </div>
                            </div>
                            <div className="basic-carousel-content">
                                <div className="basic-carousel-content-image">
                                    <img src={"/images/3.jpg"} />
                                </div>
                            </div>
                            <div className="basic-carousel-content">
                                <div className="basic-carousel-content-image">
                                    <img src={"/images/1.jpg"} />
                                </div>
                            </div>
                        </Carousel>
                        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                            <Row>
                                <Col span={12}>
                                    <div className="row-title">
                                        <h2>公司简介</h2>
                                    </div>
                                    <div className="row-content">
                                        <p className="row-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;禹顺防水公司专业从事防水堵漏施工、新旧屋面、地下室、卫生间、伸缩缝、屋顶、裂缝、内外墙等各部位的防水补漏工程。多年防水、堵漏的施工过程中积累了丰富的施工经验，结合各种建筑结构渗漏水的特点，创立了一整套防水、堵漏新工艺。 该工艺改变了传统防水、堵漏的方法，无论在任何环境条件下，迎水面和背水面均可施工。我们可根据您处工程的具体情况，量身定做两种以上的具体防水施工方案，对该工程选用恰当施工材料，以优质的工程质量，实惠的工程价格，配合高品质的材料，本着“质量乃根本，信誉赢客户”的原则，为您服务可以一劳永逸！</p>
                                        <p className="row-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以质量作为企业的生命，所有工程交工后都进行定期巡回检查和雨后的检查，至今未发现漏水现象和质量异议，用户可免除后顾之忧。</p>
                                        <p className="row-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务宗旨：采用最先进技术，奉献一流服务，创造良好的信誉，打造名牌企业。我们愿意与您建立长期稳定的合作关系，竭诚为您的企业消除因泄漏而带来的后顾之忧。公司本着“质量乃根本，信誉赢客户”的宗旨，坚持“今天的服务、明天的市场”的企业方针、竭诚为新老客户提供优质服务。</p>
                                    </div>
                                </Col>
                                <Col span={1}>
                                    <div>&nbsp;</div>
                                </Col>
                                <Col span={11}>
                                    <div className="row-title">
                                        <h2>联系我们</h2>
                                    </div>
                                    <div className="row-content">
                                        <p className="row-line-content">咨询电话：400-1234567</p>
                                        <p className="row-line-content">邮箱：123456@qq.com</p>
                                        <p className="row-line-content">公司地址：黑龙江省哈尔滨市火车站</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={7}>
                                    <div className="row-title">
                                        <h2>屋顶防水</h2>
                                    </div>
                                    <div className="row-content">
                                        <img className="snapshot" src={"/images/roof.jpg"} />
                                    </div>
                                </Col>
                                <Col span={1}>
                                    <div>&nbsp;</div>
                                </Col>
                                <Col span={7}>
                                    <div className="row-title">
                                        <h2>室内防水</h2>
                                    </div>
                                    <div className="row-content">
                                        <img className="snapshot" src={"/images/inhouse.jpg"} />
                                    </div>
                                </Col>
                                <Col span={1}>
                                    <div>&nbsp;</div>
                                </Col>
                                <Col span={7}>
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



ReactDOM.render(<App/>,document.getElementById('app'));
