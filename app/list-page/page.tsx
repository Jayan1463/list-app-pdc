"use client";

import { useState } from "react";

export default function ListPage() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;

    setItems([...items, input]);
    setInput("");
  };

  const deleteItem = (indexToDelete: number) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <main className="container">
      <div className="card">
        <h1>Task Manager</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addItem();
              }
            }}
          />

          <button className="add-btn" onClick={addItem}>
            ➕ Add
          </button>
        </div>

        <ul className="list">
          {items.length === 0 ? (
            <p className="empty-message">
              🚀 Add your first task to get started!
            </p>
          ) : (
            items.map((item, index) => (
              <li key={index} className="list-item">
                <span>{item}</span>

                <button
                  className="delete-btn"
                  onClick={() => deleteItem(index)}
                >
                  🗑️
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}