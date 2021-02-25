import React, { useEffect, useState } from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
 
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect ( ()=> {
    setStatus(props.status)

  }, [props.status]) 

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }
  
    return (
      <div className={s.status}>
        {editMode ? (
          <div>
            <input onChange={onStatusChange} autoFocus={true}  defaultValue={status} onBlur={deactivateEditMode} />
          </div>
        ) : (
          <div>
            <span className={s.profile_status} onDoubleClick={activateEditMode}>{status || 'Dubl click to change your status!!!'}</span>
          </div>
        )}
      </div>
    );
}

export default ProfileStatusWithHooks;
