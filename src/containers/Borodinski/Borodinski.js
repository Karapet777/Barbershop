import React from "react";

import AboutUS from "../../components/AboutUs/AboutUs";
import "./Borodinski.css";

class Borodinski extends React.Component {
  state = {
    about: [
      {
        title: "БИСТРО",
        info:
          "МЫ ДЕЛАЕМ СВОЮ РАБОТУ БЫСТРО! ДВА ЧАСА ПРОЛЕТЯТ НЕЗАМЕТНО И ВЫ — СЧАСТЛИВЫЙ ОБЛАДАТЕЛЬ СТИЛЬНОЙ СТРИЖКИ-МИНУТКИ!",
      },
      {
        title: "КРУТО",
        info:
          "ЗАБУДЬТЕ, КАК ВЫ СТРИГЛИСЬ РАНЬШЕ. МЫ СДЕЛАЕ М ИЗ ВАС ЗВЕЗДУ ФУТБОЛА ИЛИ КИНО! ВО ВСЯКОМ СЛУЧАЕ ВНЕШНЕ.",
      },
      {
        title: "ДОРОГО",
        info:
          "НАШИ МАСТЕРА — ПРОФЕССИОНАЛЫ СВОЕГО ДЕЛА И НЕ МОГУТ СТОИТЬ ДЕШЕВО. К ТОМУ ЖЕ, РАЗВЕ ЦЕНА НЕ ДАЕТ ОПРЕДЕЛЕННЫЙ СТАТУС?",
      },
    ],
  };
  render() {
    return (
      <div className="app_about_container">
        <p>Barbershop</p>
        <h1>BORODINSKI</h1>
        <div className="app_block_about">
          {this.state.about.map((elem, index) => {
            return <AboutUS key={index} title={elem.title} info={elem.info} />;
          })}
        </div>
      </div>
    );
  }
}

export default Borodinski;
