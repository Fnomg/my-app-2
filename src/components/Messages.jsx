import React from "react";

export const Message = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <div>{message.name}</div>
            <div>{message.text}</div>
          </div>
        )
      })}
    </div>
  )
}