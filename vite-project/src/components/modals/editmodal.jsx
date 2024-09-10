import React, { useState, useEffect } from 'react';
import { Modal, Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { EditTodo } from '../../api/todoApi';

const EditModal = ({ user, onClose }) => {
  const [name, setName] = useState(user?.Name || '');
  const [job, setJob] = useState(user?.JobName || '');
  const dispatch = useDispatch();

  useEffect(() => {
    
    if (user) {
      setName(user.Name);
      setJob(user.JobName);
    }
  }, [user]);

  const handleSave = () => {
    const updatedItem = {
      Name: name,
      JobName: job,
      Avatar: user.Avatar, 
    };

    // Асинхронно обновляем данные пользователя
    dispatch(EditTodo({ id: user.id, updatedItem }));
    onClose(); 
  };

  return (
    <Modal
      title="Редактировать пользователя"
      open={!!user} 
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
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
  );
};

export default EditModal;
