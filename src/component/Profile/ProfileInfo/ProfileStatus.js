import React, { useEffect, useState } from 'react';
import style from './ProfileStatus.module.scss';
import cn from 'classnames';

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    if (props.isOwner) {
      setEditMode(true);
    }
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className={cn(style.status, {[style.status_active]: props.isOwner})}>
      {editMode ? (
        <div>
          <input
            type="text"
            onChange={onStatusChange}
            autoFocus={true}
            defaultValue={status}
            onBlur={deactivateEditMode}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>
            {status || 'Dubl click to change your status!!!'}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
