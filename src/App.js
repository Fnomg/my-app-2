import './App.css';
import {Message} from "./components/Messages";

function App() {
  const messages = [
    {
      id: 0,
      name: 'Ann',
      text: 'Hi'
    },
    {
      id: 1,
      name: 'Ben',
      text: 'Hello'
    }
  ]
  return (
    <div className="App">
      <Message messages={messages}/>
    </div>
  );
}

export default App;
