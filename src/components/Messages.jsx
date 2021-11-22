import React from "react";

export const Message = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <div>{message.author}</div>
            <div>{message.text}</div>
          </div>
        )
      })}
    </div>
  )
}