import React from "react";
import {Link} from 'react-router-dom'

import "./Header.css";

const Header = () => {
  return (
    <div className="app-header-conteiner">
      <div className="app-header">
        <ul>
          <Link to ='/'>
           <li className = 'app-logo'>BarberShop</li>
          </Link>
          <Link to='/PraceList'>
           <li>Прейс-Лист</li>
          </Link>
         
          <Link to='/Shop'>
           <li>Магазин</li>
          </Link>
          <Link to='/News'>
           <li>Новости</li>
          </Link>
          <li>
            контакты
          </li>
          <li>
            записать
          </li>
        </ul>
        <ul>
          <li>
            
              вход
           
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
