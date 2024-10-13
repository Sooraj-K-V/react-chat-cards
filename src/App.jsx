import { useState } from "react";
import "./App.css";
import Cards from "./components/chatcard.jsx";

function App() {
  const [msg, setMsg] = useState("");
  const [cards, setCards] = useState([]);

  const sendMsg = (event) => {
    event.preventDefault();
    if(msg){
      setCards([...cards, {msg}]);
      setMsg("");
    }
  }

  const sendMsgEnter = (event) => {
    if(event.key === "Enter"){
      if(msg){
        setCards([...cards, {msg}]);
        setMsg("");
      }
    }
  }

  return (
    <div className="full-page">
      <div className="head-box">
        <h2 className="m-2">Chit-Chat</h2>
      </div>

      <div className="main-box">
        {cards.map((card, index) => (
          <Cards key={index} msg={card.msg} cardIndex={index}/>
        ))}
      </div>

      <div className="foot-box text-center">
        <input
          type="text"
          className="m-1 my-3 "
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
          onKeyDown={sendMsgEnter}
        />

        <button className="send-btn p-2 px-3 m-1 py-1" onClick={sendMsg} >
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  );
}

export default App;
