import React, { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  // READ
  const fetchMessages = async () => {
    const res = await api.get("/messages");
    setMessages(res.data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // CREATE / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await api.put(`/messages/${editingId}`, { message: text });
      setEditingId(null);
    } else {
      await api.post("/messages", { message: text });
    }

    setText("");
    fetchMessages();
  };

  // DELETE
  const handleDelete = async (id) => {
    await api.delete(`/messages/${id}`);
    fetchMessages();
  };

  // EDIT
  const handleEdit = (msg) => {
    setText(msg.message);
    setEditingId(msg.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Message CRUD</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            {msg.message}
            <button onClick={() => handleEdit(msg)}>Edit</button>
            <button onClick={() => handleDelete(msg.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;