// src/components/cards/cards.js
import React from 'react';
import { Avatar, Card } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Cards = ({ ID, Name, avatar, JobName, onDelete,onEdit }) => {
  return (
    <>
      <Card
        className='] text-white'
        hoverable={false}
        style={{ width: 300 }}
        actions={[
          <EditOutlined onClick={() => onEdit(ID)} />,
          <DeleteOutlined onClick={() => onDelete(ID)} />,
        ]}
      >
        <Meta avatar={<Avatar src={avatar} />} title={Name} description={JobName} />
      </Card>
    </>
  );
};

export default Cards;
