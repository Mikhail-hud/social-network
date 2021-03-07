import React from 'react';
import { Drawer, Form, Button, Input, Checkbox, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { saveProfile } from '../../../../redux/profile-reducer';
import { InfoCircleOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const ProfileDataForm = ({ profile, editMode, setEditMode }) => {
  const dispatch = useDispatch();
  const error = useSelector(({ profilePage }) => profilePage.error);
  if (error) {
    console.log(error);
  }
  const onFinish = (values) => {
    dispatch(saveProfile(values))
      .then(() => {
        setEditMode(false);
      })
      .catch((error) => {
        Object.values(error).map((item) => {
          return notification.open({
            duration: 10,
            description: 'Please check out fields and try again!',
            message: item,
            icon: <InfoCircleOutlined style={{ color: 'red' }} />,
          });
        });
      });
  };

  return (
    <Drawer
      title="Profile Details"
      width={'70%'}
      onClose={() => setEditMode(false)}
      visible={editMode}
      bodyStyle={{ paddingBottom: '2rem' }}>
      <Form {...formItemLayout} onFinish={onFinish}>
        <Form.Item
          initialValue={profile.fullName}
          name="fullName"
          label="Your full name:"
          rules={[{ required: true, message: 'Please enter your full name.' }]}>
          <Input placeholder="Don't forget to write your full name." />
        </Form.Item>

        <Form.Item
          initialValue={profile.aboutMe}
          name="aboutMe"
          label="Describe Yourself"
          rules={[
            {
              required: true,
              message: 'Please describe Yourself.',
            },
          ]}>
          <Input.TextArea rows={2} placeholder="How would you describe yourself?" />
        </Form.Item>
        <Form.Item
          initialValue={profile.lookingForAJobDescription}
          name="lookingForAJobDescription"
          label="Your skills"
          rules={[
            {
              required: true,
              message: 'Please indicate your skills.',
            },
          ]}>
          <Input.TextArea rows={2} placeholder="Please indicate your skills." />
        </Form.Item>
        <Form.Item
          name="lookingForAJob"
          label="Looking for a job"
          valuePropName="checked"
          initialValue={profile.lookingForAJob}>
          <Checkbox />
        </Form.Item>
        {Object.entries(profile.contacts).map(([k, i]) => {
          return (
            <Form.Item name={['contacts', `${k}`]} label={k} initialValue={i} key={k}>
              <Input placeholder="Please indicate url to your network" />
            </Form.Item>
          );
        })}
        <Form.Item wrapperCol={{ ...formItemLayout.labelCol, offset: 8 }}>
          <Button type="primary" style={{ marginRight: '1rem' }} htmlType="submit">
            Save
          </Button>
          <Button onClick={() => setEditMode(false)} type="primary">
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default ProfileDataForm;
