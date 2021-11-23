import './App.css';
import * as React from 'react';
import {ChatList} from "./components/ChatList/ChatList";
import {MessageList} from "./components/MessageList/MessageList";

const App = () => {

  return (
    <>
      <div className="content">
        <ChatList />
        <MessageList />
      </div>
    </>

  )
}

export default App;