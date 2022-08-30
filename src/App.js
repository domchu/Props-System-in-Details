import "./App.css";
import CommentDetail from "./CommentDetail";

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail surname="Samuel" TimeUpdate="Today at 12:00 am" />
      <CommentDetail surname="Dennis" TimeUpdate="Yesterday at 1:30 pm" />
      <CommentDetail surname="Johnson" TimeUpdate="Today at  4 :45 PM" />
    </div>
  );
}

export default App;
