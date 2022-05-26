import React from 'react';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Dymich'},
    {id: 5, name: 'Serega'}
    ]

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'What is up'},
    {id: 4, message: 'No'},
    {id: 5, message: 'Yeah'}
  ]


    return (
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          <Dialog id={dialogsData[0].id} name={dialogsData[0].name}/>
          <Dialog id={dialogsData[1].id} name={dialogsData[1].name}/>
          <Dialog id={dialogsData[2].id} name={dialogsData[2].name}/>
          <Dialog id={dialogsData[3].id} name={dialogsData[3].name}/>
          <Dialog id={dialogsData[4].id} name={dialogsData[4].name}/>
        </div>
        <div className={s.messages}>
          <Message id={messagesData[0].id} message={messagesData[0].message}/>
          <Message id={messagesData[1].id} message={messagesData[1].message}/>
          <Message id={messagesData[2].id} message={messagesData[2].message}/>
          <Message id={messagesData[3].id} message={messagesData[3].message}/>
          <Message id={messagesData[4].id} message={messagesData[4].message}/>
        </div>
      </div>
    );
  }
  
  export default Dialogs;