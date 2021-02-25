import React from 'react';
import DialogsUsers from './DialogsUsers/DialogsUsers';
import Messages from './Messages/Messages';
import MessageForm from './MessageForm/MessageForm';
import { Row, Col } from 'antd';

const DialogsPage = (props) => {
  const { dialogs, messages, onSendMessage } = props;
  return (
    <>
      <h1>Dialogs</h1>
      <Row justify="space-between" >
        <Col xs={24} sm={24}>
          <DialogsUsers dialogs={dialogs} />
        </Col>
        <Col xs={24} sm={20}  style={{maxWidth:'950px',margin: '0 auto' }}>
          <Messages messages={messages} />
          <MessageForm onSendMessage={onSendMessage} />
        </Col>
      </Row>
    </>
  );
};

export default DialogsPage;
