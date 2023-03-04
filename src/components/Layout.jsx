import React from "react"
import { Breadcrumb, Layout, Menu, theme } from "antd"

const { Header, Content, Footer } = Layout

const LayoutComponent = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Countries App</Menu.Item>
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
      >
        Countries APP created by Nelson Rosales
      </Footer>
    </Layout>
  )
}

export default LayoutComponent
