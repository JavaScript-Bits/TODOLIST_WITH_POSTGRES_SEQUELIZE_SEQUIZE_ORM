import { Content } from "antd/es/layout/layout";
import { theme } from "antd";

const MainContent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        padding: '24px 48px',
      }}
    >
      <div
        style={{
          background: colorBgContainer,
          padding: 24,
          minHeight: `calc(100vh - 176px)`,
          borderRadius: borderRadiusLG,
        }}
      >
        Content
      </div>
    </Content>
  )
}

export default MainContent;