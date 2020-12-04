import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
let path = "/dialogs/" + props.id
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
  <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Sasha" id="1"/>
        <DialogItem name="Pasha" id="2"/>
        <DialogItem name="Masha" id="3"/>
        <DialogItem name="Dima" id="4"/>
        <DialogItem name="Glasha" id="5"/>
      </div>
      <div className={classes.messages}>
        <Message message="hi"  />
        <Message message="How are you?"  />
        <Message message="Yo"  />
      </div>
    </div>
  )
}

export default Dialogs;