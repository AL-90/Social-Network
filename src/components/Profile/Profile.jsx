import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg"></img>
      </div>
      <div>ava + disc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
