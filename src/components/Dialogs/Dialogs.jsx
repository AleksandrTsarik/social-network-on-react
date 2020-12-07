import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './../Dialogs/DialogsItem/DialogsItem';
import Message from './../Dialogs/Message/Message'
import { NavLink } from 'react-router-dom';

// const DialogItem = (props) => {
//   let path = "/dialogs/" + props.id
//   return (
//     <div className={classes.dialog + ' ' + classes.active}>
//       <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
//     </div>
//   )
// }

// const Message = (props) => {
//   return (
//     <div className={classes.message}>{props.message}</div>
//   )
// }

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1 , name: 'Sasha'},
    {id: 2 , name: 'Pasha'},
    {id: 3 , name: 'Masha'},
    {id: 4 , name: 'Dima'},
    {id: 5 , name: 'Glasha'}
  ]

  let dialogsElement = dialogsData.map ( (d) => <DialogItem name={d.name} id={d.id} />);

  let messagesData = [
    {id: 1 , message: 'hi'},
    {id: 2 , message: 'How are you?'},
    {id: 3 , message: 'Yo'},
    {id: 4 , message: 'ho-ho-ho'}
  ]

  let postsElements = messagesData.map ( (p) => <Message message={p.message}/>) 


  return (
    <div className="content-inner">
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>

          { dialogsElement }

          {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
          <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} /> */}
        </div>
        
        <div className={classes.messages}>

          { postsElements }

          {/* <Message message={messagesData[0].message}    />
          <Message message={messagesData[1].message}  />
          <Message message={messagesData[2].message}  />
          <Message message={messagesData[3].message}  /> */}
        </div>
      </div>
    </div>
  )
}

export default Dialogs;