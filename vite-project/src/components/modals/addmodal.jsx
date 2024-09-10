import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { AddTodo } from '../../api/todoApi';


const AddModal = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const dispatch = useDispatch();

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
    setName('');
    setJob('');
  };

  const handleSave = () => {
    const newItem = {
      Name: name,
      JobName: job,
      Avatar: "https://via.placeholder.com/150", // Можно добавить поле для загрузки изображения
    };

    // Асинхронно добавляем нового пользователя
    dispatch(AddTodo(newItem));
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add</Button>
      <Modal
        title="Добавить нового пользователя"
        visible={visible}
        onCancel={handleClose}
        footer={[
          <Button key="cancel" onClick={handleClose}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <Input
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Введите должность"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          style={{ marginTop: '10px' }}
        />
      </Modal>
    </div>
  );
};

export default AddModal;
