import React from 'react';
import { sendMessage } from '../../redux/dialogs-reducer';
import { useSelector, useDispatch } from 'react-redux';
import DialogsPage from './DialogsPage';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const DialogsContainer = () => {
  const dispatch = useDispatch();
  const dialogs = useSelector(({ dialogsPage }) => dialogsPage.dialogs);
  const messages = useSelector(({ dialogsPage }) => dialogsPage.messages);

  const onSendMessage = (newMessage) => {
    dispatch(sendMessage(newMessage));
  };

  return <DialogsPage dialogs={dialogs} messages={messages} onSendMessage={onSendMessage} />;
};

export default compose(withAuthRedirect)(DialogsContainer);
