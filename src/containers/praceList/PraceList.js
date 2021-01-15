import React from "react";

import Button from "../../components/Button/Button";

import "./PraceList.scss";

const PraceList = () => {
  return (
    <div className="app-prace-list">
      <p className="title">Прайс-лист</p>
      <p className="title">ИСТИННО МУЖСКАЯ КЛАССИКА</p>
      <div className="app-container-list">
        <div className="app-block-facilities">
          <p className="title">МЫ ИСПОЛЬЗУЕМ ТОЛЬКО ЛУЧШИЕ СРЕДСТВА:</p>
          <div className="app-block-serv">
            <div></div>
            <p>BAXTER OF CALIFORNIA</p>
          </div>
          <div className="app-block-serv">
            <div></div>
            <p>MR NATTY</p>
          </div>
          <div className="app-block-serv">
            <div></div>
            <p>SUAVECITO</p>
          </div>
          <div className="app-block-serv">
            <div></div>
            <p>MALIN+GOETZ</p>
          </div>
        </div>
        <div className="app-container-serv">
          <p className="title">ЦЕНЫ НА УСЛУГИ НАШИХ МАСТЕРОВ</p>
          <div className="bord">
            <div className="block-left">
              <div className="fl-text">
                <p>Стрижка</p>
                <p>Стрижка бороди</p>
                <p>Накрутка усов</p>
              </div>
              <div className="fl-num">
                <p>1500 руб.</p>
                <p>1000 руб.</p>
                <p>450 руб.</p>
              </div>
            </div>
          </div>
          <Button className="btn-reserv" title="Запесаться" />
        </div>
      </div>
      <div className="app-about-inf">
        <div>
          <p>
            Наша мастерская расположена в центре города, поэтому сделать
            стильную стрижку можно в любое время, даже в обеденный перерыв.
            здесь вы можете погрузиться в удобную для вас атмосферу, чувствовать
            себя комфортно и свободно!
          </p>
        </div>
        <div>
          <p>
            Наша парикмахерская занимается исключительно мужскими стрижками.
            стрижка каждого клиента для нас - это уникальная и продуманная до
            мелочей работа. мы не работаем на количество, мы делаем качество.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PraceList;
