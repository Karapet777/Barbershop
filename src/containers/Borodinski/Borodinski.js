import React from "react";

import AboutUS from "../../components/AboutUs/AboutUs";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/input";
import hall from "../../assets/img/hall.jpg";
import Beard from "../../assets/icons/beard.png";

import "./Borodinski.scss";

class Borodinski extends React.Component {
  state = {
    about: [
      {
        title: "БИСТРО",
        info:
          "Мы делаем свою работу быстро! два часа пролетят незаметно и вы — счастливый обладатель стильной стрижки-минутки!",
      },
      {
        title: "КРУТО",
        info:
          "Забудьте, как вы стриглись раньше. мы сделае м из вас звезду футбола или кино! во всяком случае внешне",
      },
      {
        title: "ДОРОГО",
        info:
          "Наши мастера — профессионалы своего дела и не могут стоить дешево. к тому же, разве цена не дает определенный статус?",
      },
    ],
  };

  render() {
    return (
      <div className="app_about_container">
        <p>Barbershop</p>
        <h1 className="logo-name">Borodinski</h1>
        <img src={Beard} alt="beard" />
        <div className="app_block_about">
          {this.state.about.map((elem, index) => {
            return <AboutUS key={index} title={elem.title} info={elem.info} />;
          })}
        </div>
        <div className="app-news-container">
          <div className="app-news-block">
            <p className="about-text">НОВОСТО</p>
            <p className="text">
              Нам ноконец завезли ягермайстер! теперь ви можете пропустить
              стаканчик во время стрижки
            </p>
            <p>11 ЯНВАРЯ</p>
            <p className="text">
              В нашем комаде пополнение, Борис «БРИТВА» Стригунец, обладатель
              множества титулов и наград пополнил наши стройные ряди{" "}
            </p>
            <p>18 ЯНВАРЯ</p>
            <Button title="Все Новсти" className="btn-class" />
          </div>
          <div className="app-block-hall">
            <p className="about-text">ФОТОГАЛИРЕЯ</p>
            <img src={hall} alt="hall" />
            <div className="btn-block">
              <Button title="Назад" className="btn-class" />
              <Button title="Вперед" className="btn-class" />
            </div>
          </div>
        </div>
        <div className="app-news-container">
          <div className="inp-cont">
            <p className="about-text">Барбершоп «БОРОДИНСКИЙ»</p>
            <div>
              <p className="about-text size">
                адрес:г.цанкт-Петербург,Б.Конушенная,д.19/8
              </p>
              <p className="about-text size">Телефон:+7(495)666-02-66</p>
            </div>
            <div>
              <p className="about-text">Время работы:</p>
              <p>пн-пт: с 10:00 до 22:00</p>
              <p>сб-вс: с 10:00 до 19:00</p>
            </div>
            <div className="btn-block">
              <Button title="Как проехать" className="btn-class" />
              <Button title="Обратная связь" className="btn-class" />
            </div>
          </div>
          <div className="inp-cont">
            <p className="about-text">ЗАПИСАЦА</p>
            <p className="text">
              Укажите желаемую дату и время и мы свяжемся с вами для
              подтверждения брони
            </p>
            <div className="app-container-inp">
              <div className="app-block-inp">
                <div>
                  <p>Дата</p>
                  <Input className="inp" placeholder="08.10.2017" />
                </div>
                <div>
                  <p>Время</p>
                  <Input className="inp" placeholder="10:00" />
                </div>
              </div>
              <div className="app-block-inp">
                <div>
                  <p>Ваша имя</p>
                  <Input className="inp" placeholder="Борода" />
                </div>
                <div>
                  <p>Телефон</p>
                  <Input className="inp" placeholder="+7(495)666-02-66" />
                </div>
              </div>
              <Button className="btn-class" title="Отправить" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Borodinski;
