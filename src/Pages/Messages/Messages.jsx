import React from "react";
import MessagesComponent from "../../Sections/Profile/MessagesComponent/MessagesComponent";
import "./Messages.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import img1 from "../../Assets/profile2/img1.jpg";
import Message from "../../Components/Message/Message";
import SendIcon from "@mui/icons-material/Send";
import {
  EmojiEmotions,
  EmojiEmotionsOutlined,
  Search,
} from "@mui/icons-material";

const Messages = () => {
  return (
    <div className="messages">
      <div className="messages_left">
        <div className="messages_header">
          <div className="messages_header_profile">
            <img src={img1} alt="" />
            <h3>John Doe</h3>
          </div>
          <MoreVertIcon />
        </div>
        <div className="messages_chat_screen">
          <div className="messages_message_panel">
            <Message
              myMessage={true}
              message="Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />
            <Message myMessage={false} message="Hello, Joe!!" />
            <Message
              myMessage={false}
              message="Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />
            <Message myMessage={true} message="Hello, Joe!!" />
            <Message
              myMessage={false}
              message="Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />
            <Message myMessage={true} message="Hello, Joe!!" />
            <Message myMessage={true} message="Hello, Joe!!" />
            <Message
              myMessage={false}
              message="Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />
            <Message
              myMessage={true}
              message="Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />
            <Message
              myMessage={false}
              message="Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />
            <Message myMessage={true} message="Hello, Joe!!" />
          </div>

          <div className="messages_input_form">
            <EmojiEmotions style={{ color: "#f97096" }} />
            <div className="messages_chat_input_wrapper">
              <input
                placeholder="Send a message"
                type="text"
                className="messages_chat_input"
              />
              <button>
                {" "}
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="messages_right">
        <div className="profile_messages_search_input_wrapper">
          <Search />
          <input
            placeholder="Search"
            type="text"
            className="profile_messages_search_input"
          />
        </div>
        <MessagesComponent />
      </div>
    </div>
  );
};

export default Messages;
