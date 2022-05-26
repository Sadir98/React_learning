import React from 'react';
import post from './Post.module.css'
const Post = (props) => {
    return (
            <div className={post.item}>
              <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' alt=''/>
              <span className={post.message}>{props.message}</span>
              <span className={post.like}>  liked </span>{props.likeCount}
            </div>
    );
  }
  
  export default Post;