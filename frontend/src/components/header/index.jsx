import PropTypes from 'prop-types';

import { Header } from 'antd/es/layout/layout';
import { Button } from 'antd';
import AddTodo from '../addTodo';

const CustomHeader = ({ open, showModal, handleCancel, onFinish, onFinishFailed, formRef }) => {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
      }}
    >
      <div className="demo-logo">
        <h2>JS Bits-Todos</h2>
      </div>
      <Button
        style={{
          border: 'none',
          outline: 'none',
          backgroundColor: '#f5f5f5',
        }}
        type="text"
        onClick={showModal}
      >
        Add New Todo
      </Button>
      <AddTodo
        open={open}
        handleCancel={handleCancel}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        formRef={formRef}
      />
    </Header>
  );
};

CustomHeader.propTypes = {
  open: PropTypes.bool,
  showModal: PropTypes.func,
  handleCancel: PropTypes.func,
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
  formRef: PropTypes.object,
};

export default CustomHeader;
