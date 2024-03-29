import { useState } from 'react';
import { Header } from 'antd/es/layout/layout';
import { Button, Modal } from 'antd';

const CustomHeader = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
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
        <h2>New West</h2>
      </div>
      <Button
        style={{
          border: 'none',
          outline: 'none',
        }}
        onClick={showModal}
      >
        Add New Todo
      </Button>
      <Modal
        open={open}
        centered
        title="Title"
        onCancel={handleCancel}
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
            style={{
              backgroundColor: '#cc3406',
              border: 'none',
              outline: 'none',
              color: '#f5f5f5',
            }}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            onClick={handleCancel}
            style={{
              background: '#001529',
              border: 'none',
              outline: 'none',
              color: '#f5f5f5',
            }}
          >
            Submit
          </Button>,
        ]}
      >
        <p>Add Some Todos</p>
      </Modal>
    </Header>
  );
};

export default CustomHeader;
