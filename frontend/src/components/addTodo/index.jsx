import PropTypes from 'prop-types';
import { Button, Form, Input, InputNumber, Modal } from 'antd';

const AddTodo = ({ open, handleCancel, onFinish, onFinishFailed, formRef }) => {
  return (
    <Modal open={open} centered title="Title" onCancel={handleCancel} footer={null}>
      <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} ref={formRef}>
        <Form.Item
          style={{
            marginBottom: '10px',
          }}
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input a todo name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: '10px',
          }}
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: 'Please input age',
            },
          ]}
        >
          <InputNumber
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: '10px',
          }}
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input an address',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label=" ">
          <Button
            type="primary"
            htmlType="submit"
            style={{
              background: '#001529',
              border: 'none',
              outline: 'none',
              color: '#f5f5f5',
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

AddTodo.propTypes = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func,
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
  formRef: PropTypes.object,
};

export default AddTodo;
