import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, notification, Row, Col, Typography } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  InfoCircleOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons';
const { Text } = Typography;
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 5,
    span: 19,
  },
};

const LoginForm = ({ error, captchaUrl, onLogin, clearError }) => {
  const openNotification = (error) => {
    notification.open({
      duration: 3,
      description: 'Please check your credentials and try again!',
      message: error,
      icon: <InfoCircleOutlined style={{ color: 'red' }} />,
    });
  };

  useEffect(() => {
    if (error) {
      openNotification(error);
      clearError(null);
    }
  }, [error, clearError]);

  const onFinish = (values) => {
    onLogin(values.email, values.password, values.rememberMe, values.captcha);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <h1>Sign In</h1>
      <Row justify="center">
        <Col span={24}>
          <Form
            style={{ margin: '0 auto', maxWidth: '500px', marginTop: '50px' }}
            {...layout}
            name="login"
            initialValues={{
              rememberMe: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            {captchaUrl && (
              <>
                <Row>
                  <Col xs={24} sm={{ span: 19, offset: 5 }}>
                    <img
                      src={captchaUrl}
                      alt="captcha"
                      style={{ margin: '0 auto', display: 'block', marginBottom: '10px' }}
                    />
                  </Col>
                </Row>
                <Form.Item
                  label="Captcha"
                  name="captcha"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Captcha!',
                    },
                  ]}>
                  <Input
                    type="text"
                    prefix={<SortDescendingOutlined className="site-form-item-icon" />}
                  />
                </Form.Item>
              </>
            )}
            <Row>
              <Col xs={24} sm={{ span: 19, offset: 5 }} style={{ marginBottom: '10px' }}>
                <Text strong>
                  For test use email: free@samuraijs.com
                </Text>
              </Col>
            </Row>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}>
              <Input autoComplete="username" prefix={<UserOutlined className="site-form-item-icon" />} type="email" />
            </Form.Item>
            <Row>
              <Col xs={24} sm={{ span: 19, offset: 5 }} style={{ marginBottom: '10px' }}>
                <Text strong>
                  Password: free
                </Text>
              </Col>
            </Row>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}>
              <Input.Password autoComplete="new-password" prefix={<LockOutlined className="site-form-item-icon" />} />
            </Form.Item>
            <Form.Item {...tailLayout} name="rememberMe" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LoginForm;
