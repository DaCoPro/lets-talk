import "./SentListItem.css";
import * as messagesAPI from "../../utilities/messages-api";
import { useHistory } from "react-router-dom";

export default function SentListItem({
  sentMessage,
  setActiveMsg,
  setSentMessages,
  user,
}) {
  const history = useHistory();
  function handleMessageClick() {
    setActiveMsg(sentMessage.id);
  }
  async function handleDeleteMsg() {
    if (user) {
      messagesAPI.deleteMsg(sentMessage.id);
      const sentMessages = await messagesAPI.getSentMessages();
      setSentMessages(sentMessages);
      history.push("/");
    }
  }
  return (
    <div onClick={handleMessageClick} className="ListItem">
      <div className="IndexLabel">
        <h4>{sentMessage.title}</h4>
      </div>
      <div className="IndexLabel">
        <h4>{sentMessage.receiver}</h4>
      </div>
      <div className="IndexLabel">
        <button className="IndexTrash" onClick={handleDeleteMsg}>
          delete
        </button>
      </div>
    </div>
  );
}
