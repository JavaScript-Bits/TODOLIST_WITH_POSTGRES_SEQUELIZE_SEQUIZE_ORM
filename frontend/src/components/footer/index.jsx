import { Footer } from 'antd/es/layout/layout';

const CustomFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
        background: '#001529',
        color: '#f5f5f5',
      }}
    >
      JS Bits-Todos ©{new Date().getFullYear()} Created by JSBits
    </Footer>
  );
};

export default CustomFooter;
