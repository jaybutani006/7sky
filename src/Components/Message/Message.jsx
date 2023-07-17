import React from "react";
import "./Message.css";

const Message = ({ myMessage, message }) => {
  return (
    <div
      className={
        myMessage == true
          ? "message message_my_message"
          : "message message_other_message"
      }
    >
      <div
        className={
          myMessage == true ? "my_message_wrapper" : "other_message_wrapper"
        }
      >
        <p className="message__message">{message}</p>
        <p
          className={
            myMessage == true
              ? "message__time my_message__time"
              : "message__time other_message__time"
          }
        >
          07:10
        </p>
      </div>
    </div>
  );
};

export default Message;
