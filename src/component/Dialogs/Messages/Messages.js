import React, { useEffect, useRef } from 'react';
import { container, message_block, logo_block } from './Messages.module.scss';
import logo from '../../../assets/img/logo.png';
import { Row, Col } from 'antd';
const Message = (props) => {
  const { messages } = props;
  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
  }, [messages]);

  return (
    <Row
    className='thinScrollBar'
      align="bottom"
      xs={24}
      sm={24}
      style={{ height: '53vh', overflow: 'auto', marginBottom: '1rem', marginTop: '1rem' }}
      ref={messagesRef}>
      <Col xs={24} sm={24}>
        {messages.map((item) => {
          return (
            <div className={container} key={item.id}>
              <div className={logo_block}>
                <img src={logo} alt="dialogs_logo" />
                <p>Dmitry</p>
              </div>
              <div className={message_block}>
                <p>{item.message}</p>
              </div>
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

export default Message;
