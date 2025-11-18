import React from 'react';
import NewsItem from './NewsItem';

export default function NewsList({ news }) {
  return (
    <section style={{ background: "#191919", padding: "40px 0" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{
          display: "inline-block",
          background: "#2c2c2c",
          color: "#e06666",
          borderRadius: "50%",
          width: 54,
          height: 54,
          textAlign: "center",
          lineHeight: "54px",
          fontSize: "32px",
          marginBottom: 8
        }}>📖</div>
        <h2 style={{ color: "white", marginBottom: 28 }}>Новости</h2>
      </div>
      <ul style={{
        listStyle: "none",
        padding: 0,
        maxWidth: 700,
        margin: "0 auto"
      }}>
        {news.map(item => (
          <NewsItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
