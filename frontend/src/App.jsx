import { Layout } from 'antd';

import { CustomHeader, CustomFooter, MainContent } from './components';

function App() {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <CustomHeader />
      <MainContent />
      <CustomFooter />
    </Layout>
  );
}

export default App;
