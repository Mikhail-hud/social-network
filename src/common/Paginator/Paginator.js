import React from 'react';
import {Pagination, Row, Col} from 'antd';

let Paginator = ({totalItemsCount, pageSize, currentPage, isFetching, onSetCurrentPage, onChangePageSize}) => {

  const onShowSizeChange = (__, pageSize) => {
    onChangePageSize(pageSize)
  };
  const onChange = (currentPage) => {
    onSetCurrentPage(currentPage)
  };

  return (
    <Row justify='center'>
      <Col>
        <Pagination
          responsive
          disabled={isFetching}
          style={{textAlign: 'center', marginBottom: '2rem'}}
          pageSizeOptions={[5, 10, 15, 20, 50]}
          pageSize={pageSize}
          current={currentPage}
          total={totalItemsCount}
          onShowSizeChange={onShowSizeChange}
          showSizeChanger
          onChange={onChange}
          showQuickJumper
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        />
      </Col>
    </Row>
  );
};

export default Paginator;
