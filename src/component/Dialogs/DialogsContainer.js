import React, { useCallback } from 'react';
import { sendMessage } from '../../redux/dialogs-reducer';
import { useSelector, useDispatch } from 'react-redux';
import DialogsPage from './DialogsPage';

const DialogsContainer = () => {
  const dispatch = useDispatch();
  const dialogs = useSelector(({ dialogsPage }) => dialogsPage.dialogs);
  const messages = useSelector(({ dialogsPage }) => dialogsPage.messages);

  const onSendMessage = (newMessage) => {
    dispatch(sendMessage(newMessage));
  };

  return <DialogsPage dialogs={dialogs} messages={messages} onSendMessage={onSendMessage} />;
};

export default DialogsContainer;
