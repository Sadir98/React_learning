import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import prfl from './Profile.module.css'
const Profile = () => {
    return (
      <div className={prfl.content}>
        <ProfileInfo />
        <MyPosts />
      </div>
    );
  }
  
  export default Profile;