import "./App.css";

function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src="" alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today by 6:00pm</span>
          </div>
          <div className="text">Nice blog post</div>
        </div>
      </div>
    </div>
  );
}

export default App;
