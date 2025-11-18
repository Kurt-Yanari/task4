import React from 'react';
import HeroSection from './components/HeroSection';
import NewsList from './components/NewsList';
import WelcomeMessage from './components/WelcomeMessage';
import ProductList from './components/ProductList';
import TabSwitcher from './components/TabSwitcher';
import TodoList from './components/TodoList';


const newsData = [
  {
    id: 1,
    title: "Параллакс-скроллинг",
    date: "19.11.2025",
    description: "Это относительно новый эффект в веб-дизайне, который заслуживает отдельного рассмотрения. Параллакс-скроллинг — отличный способ улучшения взаимодействия с пользователем...",
  },
  {
    id: 2,
    title: "Преимущества одностраничного сайта",
    date: "19.11.2025",
    description: "На сегодняшний день одностраничные сайты все также востребованы...",
  }
];

function App() {
  return (
    <div>
      {/* Hero-блок сверху */}
      <HeroSection />

      {/* Новости (скролл список) */}
      <NewsList news={newsData} />

      {/* Проверка WelcomeMessage: можно поиграть с isLoggedIn */}
      <WelcomeMessage isLoggedIn={true} />

      {/* Список товаров с условным рендерингом значков */}
      <ProductList />

      {/* Переключатель вкладок */}
      <TabSwitcher />

      {/* To-Do лист */}
      <TodoList />
    </div>
  );
}

export default App;
