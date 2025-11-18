import React from 'react';

export default function NewsItem({ title, date, description, image }) {
  return (
    <li style={{
      display: "flex",
      background: "#232323",
      color: "white",
      marginBottom: 14,
      borderRadius: 10,
      overflow: "hidden"
    }}>
      {/* <img src={image} alt={title} style={{ width: 120, objectFit: "cover" }} /> */}
      <div style={{ padding: 16, flex: 1 }}>
        <span style={{ fontSize: 12, color: "#aaa" }}>{date}</span>
        <h4 style={{ margin: "4px 0 8px" }}>{title}</h4>
        <p style={{ fontSize: 15 }}>{description}</p>
        <button style={{
          marginTop: 8, border: "none", background: "#444", color: "white",
          borderRadius: 7, padding: "4px 16px", cursor: "pointer"
        }}>ещё</button>
      </div>
    </li>
  );
}
