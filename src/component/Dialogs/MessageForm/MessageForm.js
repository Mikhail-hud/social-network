import React from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Typography, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
  const { onSendMessage } = props;
  const { Text } = Typography;
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = ({ newMessage }) => {
    onSendMessage(newMessage);
    reset();
  };
  return (
    <Row>
      <Col xs={24}>
        <form onSubmit={handleSubmit(onSubmit)} className="send-message-form" autoComplete="off">
          {errors.newMessage?.type === 'maxLength' && (
            <Text type="danger">The character limit for a single message is 160 characters</Text>
          )}
          <textarea rows="2" name="newMessage" ref={register({ required: true, maxLength: 160 })} />
          <Button
            disabled={errors.newMessage?.type === 'maxLength'}
            htmlType="submit"
            type="dashed"
            shape="round"
            size="large"
            icon={<SendOutlined />}>
            Send
          </Button>
        </form>
      </Col>
    </Row>
  );
};

export default MessageForm;
