import { useState, useEffect, useCallback } from "react";
import {nanoid} from "nanoid";
import io from "socket.io-client";

import SigninChatForm from "./components/SigninChatForm/SigninChatForm";
import ChatForm from "./components/ChatForm/ChatForm";
import Chat from "./components/Chat/Chat";

const socket = io.connect("http://localhost:5000");

function App() {
  const [nickname, setNickname] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(()=> {
    socket.on("chat-message", data => {
      setMessageList(prevMessageList => {
        const {message, nickname} = JSON.parse(data);
        const newMessage = {
          id: nanoid(),
          type: "user",
          nickname,
          message,
        };
        return [newMessage, ...prevMessageList];
      })
    })
  }, [])

  const addNickname = useCallback(({nickname}) => setNickname(nickname), []);

  const addMessage = useCallback(({message}) => {
    setMessageList(prevMessageList => {
      const newMessage = {
        id: nanoid(),
        type: "you",
        nickname,
        message,
      };
      return [newMessage, ...prevMessageList];
    })
    socket.emit("chat-message", JSON.stringify({message, nickname}));
  }, [nickname]);

  return (
    <div className="App">
      {!nickname && <SigninChatForm onSubmit={addNickname} />}
      {nickname && <ChatForm onSubmit={addMessage} />}
      {nickname && <Chat items={messageList} />}
    </div>
  )
}

export default App;
