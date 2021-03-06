import React from "react";

import SecretsBlock from "../../components/secretsBlock/secretsBlock";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";

import "./News.scss";

class News extends React.Component {
  state = {
    secrets: [
      {
        src: img1,
        title: "Секрети мягкой и послушной бороды",
        data: "15.01.20",
        show:
          "ГОРЯЧИЙ ДУШ. ПОВЫШЕННАЯ ВЛАЖНОСТЬ И ПАР, РАСПАРЯТ КОЛЮЧИЕ ВОЛОСКИ ВАШЕЙ БОРОДЫ. ПОСЛЕ ДУША, ВОСПОЛЬЗУЙТЕСЬ УВЛАЖНЯЮЩИМ МАСЛОМ (ЛЮБЫМ, КОТОРОЕ У ВАС ЕСТЬ ИЛИ СПЕЦИАЛЬНЫМ ДЛЯ БОРОДЫ), НАКРОЙТЕ ЛИЦО МАХРОВЫМ ПОЛОТЕНЦЕМ НА 10-15 МИНУТ И СДЕЛАЙТЕ ЛЕГКИЙ МАССАЖ.",
      },
      {
        src: img2,
        title: "МЫ НОКОНЕЦ ЗОВЕЗЛИ ЯГЕРМАЙСТЕР!",
        data: "15.01.20",
        show:
          "ГОРЯЧИЙ ДУШ. ПОВЫШЕННАЯ ВЛАЖНОСТЬ И ПАР, РАСПАРЯТ КОЛЮЧИЕ ВОЛОСКИ ВАШЕЙ БОРОДЫ. ПОСЛЕ ДУША, ВОСПОЛЬЗУЙТЕСЬ УВЛАЖНЯЮЩИМ МАСЛОМ (ЛЮБЫМ, КОТОРОЕ У ВАС ЕСТЬ ИЛИ СПЕЦИАЛЬНЫМ ДЛЯ БОРОДЫ), НАКРОЙТЕ ЛИЦО МАХРОВЫМ ПОЛОТЕНЦЕМ НА 10-15 МИНУТ И СДЕЛАЙТЕ ЛЕГКИЙ МАССАЖ.",
      },
      {
        src: img3,
        title: "Секрети мягкой и послушной бороды",
        data: "15.01.20",
        show:
          "ГОРЯЧИЙ ДУШ. ПОВЫШЕННАЯ ВЛАЖНОСТЬ И ПАР, РАСПАРЯТ КОЛЮЧИЕ ВОЛОСКИ ВАШЕЙ БОРОДЫ. ПОСЛЕ ДУША, ВОСПОЛЬЗУЙТЕСЬ УВЛАЖНЯЮЩИМ МАСЛОМ (ЛЮБЫМ, КОТОРОЕ У ВАС ЕСТЬ ИЛИ СПЕЦИАЛЬНЫМ ДЛЯ БОРОДЫ), НАКРОЙТЕ ЛИЦО МАХРОВЫМ ПОЛОТЕНЦЕМ НА 10-15 МИНУТ И СДЕЛАЙТЕ ЛЕГКИЙ МАССАЖ.",
      },
      {
        src: img4,
        title: "Секрети мягкой и послушной бороды",
        data: "15.01.20",
        show:
          "ГОРЯЧИЙ ДУШ. ПОВЫШЕННАЯ ВЛАЖНОСТЬ И ПАР, РАСПАРЯТ КОЛЮЧИЕ ВОЛОСКИ ВАШЕЙ БОРОДЫ. ПОСЛЕ ДУША, ВОСПОЛЬЗУЙТЕСЬ УВЛАЖНЯЮЩИМ МАСЛОМ (ЛЮБЫМ, КОТОРОЕ У ВАС ЕСТЬ ИЛИ СПЕЦИАЛЬНЫМ ДЛЯ БОРОДЫ), НАКРОЙТЕ ЛИЦО МАХРОВЫМ ПОЛОТЕНЦЕМ НА 10-15 МИНУТ И СДЕЛАЙТЕ ЛЕГКИЙ МАССАЖ.",
      },
    ],
  };

  render() {
    return (
      <div className="app-container-news">
        <p className="path-news">Новости</p>
        <div className="app-block-news">
          <div>
            {this.state.secrets.map((elem, index) => {
              return (
                <SecretsBlock
                  className="app-block-secret"
                  key={index}
                  src={elem.src}
                  title={elem.title}
                  data={elem.data}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default News;
