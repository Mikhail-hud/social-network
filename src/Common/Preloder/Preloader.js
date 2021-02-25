import React from 'react';
import { Spin} from 'antd';

const Preloader = () => {
  return (
      <Spin style={{position:'absolute', left:'50%', top: '0.2%'}} size="large" tip="Loading..." />
  );
};

export default Preloader;
