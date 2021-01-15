import React from "react";

import Vk from "../../assets/icons/vk";
import FacebookIcon from "../../assets/icons/facebook-icon";
import Instagram from "../../assets/icons/instagram";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="app-footer-container">
      <div className="app-footer-block">
        <div>
          <p>Барбершоп "Бородинский</p>
          <address>адрес:г.Санкт-Петербуег,ул.Б.Конюшенная,д.19/8</address>
          <p>Как нас найти</p>
          <p>
            <span>Телефон:</span> +7(495)666-02-66
          </p>
        </div>
        <div className="app-icons-container">
          <p>Давайте дружить!</p>
          <div className="app-icons-footer-block">
            <a href="https://vk.com/" target="blank">
              <Vk className="icons" />
            </a>
            <a href="https://www.facebook.com/" target="blank">
              <FacebookIcon className="icons" />
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <Instagram className="icons" />
            </a>
          </div>
        </div>
        <div>
          <p>Разработано</p>
          <a
            className="company"
            href="http://htmlacademy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML ACADEMY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
