import React from 'react';
import styles from './Friend.module.css';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';

let User = ({ friend,unFollowingInProgress, unFollowFriends, pageSizeFriends, currentPageFriends }) => {

  return (
    <section className={styles.friends_container} key={friend.id}>
      <div className={styles.friends_logo}>
        <div className={styles.friends_link}>
          <NavLink to={`/profile/` + friend.id}>
            <img
              src={friend.photos.small !== null ? friend.photos.small : logo}
              alt="dialogs_logo"
            />
          </NavLink>
        </div>
        <div className={styles.delete}>
          <button disabled={unFollowingInProgress.some((id) => id === friend.id)} onClick={() => {unFollowFriends(friend.id, currentPageFriends, pageSizeFriends)}} type="button">Remove Friend</button>
        </div>
      </div>
      <div className={styles.friends_info}>
        <div className={styles.center}>
          <h3>{friend.name}</h3>
          <p>{friend.status}</p>
        </div>
      </div>
    </section>
  );
};

export default User;
