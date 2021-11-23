import  "./Messages.css";
import {Message} from "../Message/Message";

export const Messages = ({ messageList }) => {

  return (
    <div className="messages">
      {messageList.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  )
};
