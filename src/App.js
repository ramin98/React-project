import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Message from './components/Message/Message';
import {Route} from "react-router-dom";


function App(props) {
  return (   
    <div className="App">
      <Header/>
      <Nav/>     
      <div className="app_content">
      <Route path='/main' render={() => <Main state={props.state.mainPage} addNewPost={props.addNewPost}/>}/>
      <Route path='/dialogs/' render={() => <Message state={props.state.messagesPage} />}/> 
      </div>
    </div>
  );
}

export default App;
