import React from 'react';


export default function WelcomeMessage({ isLoggedIn }) {
  return (
    <p style={{margin: 16, fontSize: 18}}>
      {isLoggedIn ? "Добро пожаловать!" : "Пожалуйста, войдите в систему."}
    </p>
  );
}


