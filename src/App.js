import "./App.css";
import CommentDetail from "./CommentDetail";

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail
        surname="Samuel"
        TimeUpdate="Today at 12:00 am"
        comment="Graphic Designer"
        country="Australia"
      />
      <CommentDetail
        surname="Dennis"
        TimeUpdate="Yesterday at 1:30 pm"
        comment="Web Developer"
        country="United States"
      />
      <CommentDetail
        surname="Johnson"
        TimeUpdate="Today at  4 :45 PM"
        comment="UI/UX Designer"
        country="Nigeria"
      />
    </div>
  );
}

export default App;
