import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';

const HeaderPage = (props) => {
  let history = useHistory();
  const { isAuth, login, onLogout } = props;

  const handleLoginLogout = () => {
    if (isAuth) {
      onLogout();
    } else {
      history.push('/login');
    }
  };
  return (
    <Row style={{ width: '100%' }} justify="space-between">
      <Col>
        <h3>{isAuth ? login : 'Join us!'}</h3>
      </Col>
      <Col>
        <Button
          className="btn-login-out"
          style={{ background: 'none' }}
          type="dashed"
          shape="round"
          size="large"
          onClick={handleLoginLogout}
          icon={isAuth ? <LogoutOutlined /> : <LoginOutlined />}>
          {isAuth ? 'logout' : 'login'}
        </Button>
      </Col>
    </Row>
  );
};

export default HeaderPage;
