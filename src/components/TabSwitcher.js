import React, { useState } from 'react';

export default function TabSwitcher() {
  const tabs = ['Профиль', 'Настройки', 'Уведомления'];
  const [active, setActive] = useState(tabs[0]);
  return (
    <div style={{ margin: "22px 0" }}>
      <div>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              marginRight: 8,
              padding: "8px 18px",
              borderRadius: 8,
              border: "none",
              background: active === tab ? 'blue' : '#eee',
              color: active === tab ? 'white' : '#333',
              fontWeight: active === tab ? 700 : 500,
              cursor: 'pointer'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 16 }}>
        Вы находитесь в разделе: <b>{active}</b>
      </div>
    </div>
  );
}
