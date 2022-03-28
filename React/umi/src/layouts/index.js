// import styles from './index.css';

// function BasicLayout(props) {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to umi!</h1>
//       {props.children}
//     </div>
//   );
// }

// export default BasicLayout;

// 修改内容

import styles from './index.css';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
const { Header, Content, Footer, Sider } = Layout;

function BasicLayout(props) {
  return (
    <Layout className={styles.antLayout}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="user" />
              <span className="nav-text">首页</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/form">
              <Icon type="form" />
              <span className="nav-text">表单</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/article">
              <Icon type="upload" />
              <span className="nav-text">Article管理</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="4">
            <Link to="/echarts">
              <Icon type="bar-chart" />
              <span className="nav-text">echarts图表</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/drag-demo">
              <Icon type="drag" />
              <span className="nav-text">拖拽组件示例</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/table-list">
              <Icon type="table" />
              <span className="nav-text">自定义列表</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
            浙ICP备2022009054号-1
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
