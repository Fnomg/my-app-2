import './App.css';
import {Message} from "./components/Messages";

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

function App() {

  return (
    <div className="App">
      <Message messages={messages}/>
    </div>
  );
}

export default App;
