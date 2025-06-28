import React, { useState, useEffect } from "react";
import "./App.css";

// 🗂️ Types
interface Comment {
  id: number;
  userName: string;
  avatarUrl: string;
  text: string;
  timestamp: number;
}

// 🗂️ Helper for "time ago" display
const timeAgo = (timestamp: number): string => {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

function App() {
  // ✅ State
  const [comments, setComments] = useState<Comment[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [text, setText] = useState<string>("");

  // ✅ Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("comments");
    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, []);

  // ✅ Save to localStorage when comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // ✅ Handle Add
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userName.trim() || !text.trim()) {
      alert("Please fill both fields.");
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      userName,
      avatarUrl: `https://i.pravatar.cc/150?u=${userName}`, // Random avatar
      text,
      timestamp: Date.now(),
    };

    setComments([newComment, ...comments]);
    setUserName("");
    setText("");
  };

  // ✅ Handle Delete
  const handleDelete = (id: number) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="App" style={{ padding: 16, maxWidth: 600, margin: "auto" }}>
      <h2>🗨️ Comment Viewer</h2>

      {/* Add Comment Form */}
      <form onSubmit={handleAdd} style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <input
          type="text"
          placeholder="Your comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <button type="submit">Add</button>
      </form>

      {/* Comment List */}
      {comments.length === 0 && <p>No comments yet. Be first!</p>}
      {comments.map((c) => (
        <div key={c.id} className="comment">
          <div className="comment-header">
            <img
              src={c.avatarUrl}
              alt="avatar"
              className="comment-avatar"
            />
            <strong>{c.userName}</strong>
            <span style={{ marginLeft: "auto" }} className="comment-time">
              {timeAgo(c.timestamp)}
            </span>
          </div>
          <div className="comment-body">{c.text}</div>
          <button
            onClick={() => handleDelete(c.id)}
            style={{ marginTop: 4 }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
