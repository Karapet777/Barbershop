import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="app-header-conteiner">
      <div className="app-header">
        <ul>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              BarberShop
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Прейс-Лист
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Магазин
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Новости
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              контакты
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              записать
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              вход
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
