import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task.trim() }]);
    setTask('');
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ margin: "28px 0", maxWidth: 500 }}>
      <div>
        <input
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Новая задача"
          style={{ padding: 8, borderRadius: 7, border: '1px solid #bbb', width: 260 }}
        />
        <button onClick={addTodo}
          style={{ marginLeft: 8, padding: '9px 22px', border: "none", borderRadius: 7, background: "blue", color: "white" }}>
          Добавить
        </button>
      </div>
      {todos.length === 0 ? (
        <h3 style={{ margin: "20px 0" }}>Список дел пуст. Добавьте первую задачу!</h3>
      ) : (
        <ul style={{ margin: "18px 0", padding: 0 }}>
          {todos.map(todo => (
            <li key={todo.id} style={{
              background: "#222", color: "white", marginBottom: 10, borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 14px"
            }}>
              {todo.text}
              <button onClick={() => removeTodo(todo.id)}
                style={{ marginLeft: 12, background: "#e06666", color: "white", border: "none", borderRadius: 5, padding: "3px 12px" }}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
