import React from 'react';
import { notification } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

export const openNotification = () => {
  notification.open({
    duration: 10,
    message: 'You are not authorized to perform this action.',
    description: 'For test use email: free@samuraijs.com. Password: free',
    icon: <InfoCircleOutlined style={{ color: 'red' }} />,
  });
};
