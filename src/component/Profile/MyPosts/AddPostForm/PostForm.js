import React from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Typography, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { openNotification } from '../../../../common/helpers';

const PostForm = (props) => {
  const { isAuth, addPost } = props;
  const { Text } = Typography;
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = ({ newPost }) => {
    if (isAuth) {
      addPost(newPost);
      reset();
    } else {
      openNotification();
    }
  };
  return (
    <Row>
      <Col xs={24}>
        <form onSubmit={handleSubmit(onSubmit)} className="send-message-form" autoComplete="off">
          {errors.newPost?.type === 'maxLength' && (
            <Text type="danger">The character limit for a single message is 100 characters</Text>
          )}
          <textarea rows="2" name="newPost" ref={register({ required: true, maxLength: 100 })} />
          <Button
            disabled={errors.newPost?.type === 'maxLength'}
            htmlType="submit"
            type="dashed"
            shape="round"
            size="large"
            icon={<SendOutlined />}>
            Post
          </Button>
        </form>
      </Col>
    </Row>
  );
};

export default PostForm;
