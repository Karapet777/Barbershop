import React from "react";

import vk from "../../assets/icons/vk.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="app-footer-container">
      <div className="app-footer-block">
        <div>
          <p>Барбершоп "Бородинский"</p>
          <address>Адрес:Г.Санкт-Петербуег,ул.Б.Конюшенная,Д.19/8</address>
          <p>Как нас найти</p>
          <p>
            <span>Телефон:</span>+7(495)666-02-66
          </p>
        </div>
        <div className="app_icons_block">
          <p>ДАВАЙТЕ ДРУЖИТЬ!</p>
          <div>
            <a href="https://vk.com/" target="blank">
              {" "}
              <img src={vk} alt="vk" />
            </a>
            <a href="https://www.facebook.com/" target="blank">
              {" "}
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/" target="blank">
              {" "}
              <img src={instagram} alt="instagram" />
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
