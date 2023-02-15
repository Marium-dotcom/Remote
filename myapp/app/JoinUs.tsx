"use client"
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {Email} from './Email'
const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(<Email/>);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText(<>The modal will be closed after two seconds</>);
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };


  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button className='bg-blue-500' type="primary" onClick={showModal}>
Expert? Join us      </Button>
      <Modal
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
        okType={'danger'}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default App;
