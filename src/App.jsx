import './App.css';
import {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {Message} from "./components/Messages";

function App() {

  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let timer;
    if (messageList.length !== 0 && messageList[messageList.length - 1]?.author !== 'Good') {
      timer = setTimeout(() => sendMessage('Good'), 1500);
    }
    return () => clearTimeout(timer);
  },[messageList, setMessage]);

  const handleChangeMessageText = (e) => {
    setMessage(e.target.value)
  }

  function sendMessage (author){
    let newMessage = {
      id: uuidv4(),
      author: author,
      text: message !== '' ? message : 'Приветики'
    }
    setMessage('')
    setMessageList([...messageList, newMessage]);
  }

  return (
    <div className="App">
      <Message messages={messageList}/>
      <input type="text" onChange={handleChangeMessageText} value={message}/>
      <button onClick={() => sendMessage('Ann')}>Отправить</button>
    </div>
  );
}

export default App;
