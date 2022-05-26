import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img src='https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg' alt=''/>
        </div>
        <div className={s.descriptionBlock}>
          ava-description
        </div>
      </div>
    );
  }
  
  export default ProfileInfo;