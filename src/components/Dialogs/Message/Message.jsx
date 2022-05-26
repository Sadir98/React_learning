import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Message.module.css';


const Message = (props) => {
    return (
      <div>
          <div className={s.message}>{props.id} {props.message}</div>
      </div>
    );
  }
  
  export default Message;