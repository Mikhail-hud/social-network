import React from 'react';
import HeaderPage from './HeaderPage';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { Layout } from 'antd';
const { Header } = Layout;

const style = {
  background: 'none',
  boxShadow: '0 0 10px rgba(0, 0, 0, .2)',
  padding: '20px',
  margin: '0 16px',
  lineHeight: 'normal',
  display: 'flex',
  alignItems:'center'
};

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(({ auth }) => auth.isAuth);
  const login = useSelector(({ auth }) => auth.login);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Header style={style}>
      <HeaderPage isAuth={isAuth} login={login} onLogout={onLogout} />
    </Header>
  );
};

export default HeaderContainer;
