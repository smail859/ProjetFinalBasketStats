import MessagingNotif from "../components/componentsMessaging/MessagingNotif";
import MessagingNews from "../components/componentsMessaging/MessagingNews";
import "../styles/messaging.css";

function Messaging() {
  return (
    <div className="notif_container">
      <MessagingNews
        newsApiUrl="https://newsapi.org/v2"
        newsApiKey="1c64b8ade7234a84aa4d543c7d4530bc"
        newsPageSize="2"
        newsCategory="sport"
      />
      <MessagingNotif apiKey="2cc5f56028a583d2a3757667042a9724" />
    </div>
  );
}

export default Messaging;
