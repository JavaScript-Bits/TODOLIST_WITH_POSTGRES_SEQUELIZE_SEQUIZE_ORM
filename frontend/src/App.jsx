import { useEffect, useState, useRef } from 'react';
import { Layout } from 'antd';

import { CustomHeader, CustomFooter, MainContent } from './components';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

function App() {
  const formRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState(data);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://localhost:5000/api/todos');
      const todos = await response.json();
      console.log({ todos });
    };
    fetchTodos();
  }, []);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    formRef.current.resetFields();
  };

  const onFinish = (values) => {
    let nextKey = todos.length + 1;
    let newData = {
      key: nextKey,
      name: values.name,
      age: values.age,
      address: values.address,
    };
    setTodos((todos) => [...todos, newData]);
    handleCancel();
  };

  const onFinishFailed = (errorInfo) => {
    console.log({ errorInfo });
  };
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <CustomHeader
        open={open}
        showModal={showModal}
        handleCancel={handleCancel}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        formRef={formRef}
      />
      <MainContent todos={todos} />
      <CustomFooter />
    </Layout>
  );
}

export default App;
