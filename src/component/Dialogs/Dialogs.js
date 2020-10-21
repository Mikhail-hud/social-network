import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogIteam/DialogIteam";
import Message from "./Message/Message";
import AddMessageForm from './AddMessageForm/AddMessageForm'


const Dialogs = (props) => {

  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let mesageElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id}/>
  ));
 
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <>
      <h1>Dialogs</h1>
      <section className={s.dialogs}>
        <div className={s.dialogs_list}>
          <ul>{dialogsElements}</ul>
        </div>
        <div className={s.dialogs_users}>
          {mesageElements}
          <AddMessageForm onSubmit={addNewMessage} afterSubmit={props.afterSubmit}/>
        </div>
      </section>
    </>
  );
};

export default Dialogs;
