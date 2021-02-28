import React from 'react';
import { Drawer, Form, Button, Col, Row, Input, Checkbox } from 'antd';

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

const ProfileDataForm = ({ profile, error, editMode, setEditMode, saveProfile }) => {
  const onFinish = (values) => {
    saveProfile(values);
    console.log('values', values);
  };
  // console.log(profile);
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
            <Form.Item name={`contacts.${k}`} label={k} initialValue={i} key={k}>
              <Input  placeholder="Please indicate url to your network" />
            </Form.Item>
          );
        })}
        <Form.Item wrapperCol={{ ...formItemLayout.labelCol, offset: 8 }}>
          <Button type="primary" style={{ marginRight: '1rem' }} htmlType="submit">
            Save
          </Button>
          <Button type="primary">Cancel</Button>
        </Form.Item>
      </Form>
    </Drawer>
    //       <form className={s.profile_form} onSubmit={handleSubmit}>
    //         <label className={s.profile_form_save}>
    //              <button onClick={goToEditMode}>Save changes!</button>
    //         </label>
    //         {error &&
    //         <label className={s.error}>
    //           <p>{error}</p>
    //         </label>}
    //         <label>
    //             <span>Looking for a job: </span>
    //             <Field className={s.form_check} type="checkbox" name="lookingForAJob" component={'input'} />
    //          </label>
    //         <label>
    //              <span>Your full name: </span>
    //              <Field  placeholder='Type here!' name="fullName" component={'input'} />
    //         </label>
    //         <label>
    //              <span>About You: : </span>
    //              <Field  placeholder='Type here!' type="textarea" name="aboutMe" component={'input'} />
    //          </label>
    //         <label>
    //              <span>Your skills : </span>
    //              <Field  placeholder='Type here!' type="textarea" name="lookingForAJobDescription" component={'input'} />
    //          </label>
    //         <h3>Contacts:</h3>
    //         {Object.keys(profile.contacts).map(key => {
    //         return (
    //         <label key={key}>
    //              <span>{key}</span>
    //              <Field  placeholder='Type here!' name={`contacts.${key}`} component={'input'} />
    //         </label>
    //         )
    //         })}
    //     </form>
  );
};

export default ProfileDataForm;
