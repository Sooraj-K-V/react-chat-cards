import { useState } from "react";
import "./chatcard.css";

function Card(props) {
  const [message, setMeassage] = useState("");

  return (
    <div className="msg-box" key={props.key} cardIndex={props.index}>
      <p className="msg-box-paragpraph">
        {props.msg}
      </p>
    </div>
  );
}
export default Card;
