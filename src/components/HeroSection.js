import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-section" style={{
      background: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80') center/cover no-repeat`,
      padding: '80px 0',
      color: 'white',
      textAlign: 'center'
    }}>
      <blockquote style={{ fontSize: 24, fontStyle: "italic", marginBottom: 8 }}>
        Иные рождаются великими, другие достигают величия, а третьи нанимают специалистов по связям с общественностью.
      </blockquote>
      <span style={{
        background: 'rgba(0,0,0,0.4)',
        padding: '6px 16px',
        borderRadius: 8,
        fontSize: 18
      }}>
        Дэниэл Бурстин
      </span>
    </section>
  );
}
