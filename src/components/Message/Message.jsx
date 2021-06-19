import React from 'react';
import c from "./Message.module.css";
import {NavLink} from "react-router-dom";

function Message(props) {

function Friends (props) {
  let path = "/dialogs/" + props.id;
  return(
  <div>
    <NavLink to={path} className={c.friends}>{props.name}</NavLink>
  </div>
  );
}

function Messages (props) {
  return(
  <div>
    <div className={c.message_item}>{props.message}</div>
  </div>
  )
}

let friendsElements = props.state.friends.map( f => <Friends name={f.name} id={f.id}/>)
let messageElements = props.state.message.map( m => <Messages message={m.message}/>)


    return (
      <div className={c.message}>
      <div>     
        {friendsElements}
      </div>
      <div>
        {messageElements}
      </div>
      </div>  
    );
  }
  
export default Message;