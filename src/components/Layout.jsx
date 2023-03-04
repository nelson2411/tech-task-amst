import React from "react"
import { Breadcrumb, Layout, Menu, theme } from "antd"
import { GithubOutlined } from "@ant-design/icons"

const { Header, Content, Footer } = Layout

const LayoutComponent = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1" className="menu-item">
            Countries App
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            padding: 24,
            minHeight: 280,
            marginBottom: 20,
            marginTop: 40,
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
        className="footer"
      >
        <p>Countries APP created by Nelson Rosales</p>
        <p>copyrigth &copy; 2021</p>
        <a href="https://github.com/nelson2411" target="_blank">
          <GithubOutlined />
        </a>
      </Footer>
    </Layout>
  )
}

export default LayoutComponent
