import PropTypes from 'prop-types';
import { Content } from 'antd/es/layout/layout';
import { theme, Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const MainContent = ({ todos }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        display: 'grid',
        placeItems: 'center',
        padding: '24px 48px',
      }}
    >
      <div
        style={{
          background: colorBgContainer,
          padding: 24,
          minHeight: `calc(100vh - 176px)`,
          borderRadius: borderRadiusLG,
          maxWidth: 1024,
          width: '100%',
        }}
      >
        <h2
          style={{
            marginBottom: '20px',
          }}
        >
          Todo List
        </h2>
        <Table
          columns={columns}
          dataSource={todos}
          pagination={false}
          style={{
            height: '350px',
            overflowY: 'scroll',
          }}
          // size="small"
        />
      </div>
    </Content>
  );
};

MainContent.propTypes = {
  todos: PropTypes.array,
};

export default MainContent;
