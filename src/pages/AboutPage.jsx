import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="body_about">
      <h2>ABOUT US</h2>
      <div className="container">
        <div className="card">
          <img
            src="https://i.pinimg.com/736x/ea/0c/d4/ea0cd4cfed861e0ba7ebe75662f34fb6.jpg"
            alt=""
          />
          <div className="intro">
            <h1 className="name">Губка Боб</h1>
            <p>
              <span style={{ color: "yellow" }}>Тип работы:</span> Шеф-повар
            </p>
            <p>
              <span style={{ color: "yellow" }}>Родился:</span> 14 июля 1986
              года в семье Маргарет и Гарольда Квадратные Штаны.
            </p>
            <p>
              <span style={{ color: "yellow" }}>Характер:</span> оптимизм,
              доброта, трудолюбие, надёжность
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.youloveit.ru/uploads/posts/2018-07/1532102642_youloveit_ru_humanizaciya_gubka_bob04.jpg"
            alt=""
          />
          <div className="intro">
            <h1 className="name">Сквидвард</h1>
            <p>
              <span style={{ color: "yellow" }}>Тип работы:</span> Официант,
              кассир
            </p>
            <p>
              <span style={{ color: "yellow" }}>Родился:</span> 9 октября у
              Джеффа и Миссис Тэнтеклс.
            </p>
            <p>
              <span style={{ color: "yellow" }}>Характер:</span> самый умный,
              саркастическое отношение и видит других как нецивилизованных
              дебилов{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.youloveit.ru/uploads/posts/2018-07/1532102575_youloveit_ru_humanizaciya_gubka_bob03.jpg"
            alt=""
          />
          <div className="intro">
            <h1 className="name">Патрик</h1>
            <p>
              <span style={{ color: "yellow" }}>Тип работы:</span> Постоянный
              клиент
            </p>
            <p>
              <span style={{ color: "yellow" }}>Родился:</span> родился 26
              февраля 1986 года.
            </p>
            <p>
              <span style={{ color: "yellow" }}>Характер:</span> Патрик Звезда -
              персонаж с простым и добрым характером. Он изображен как ленивый и
              не очень умный, но всегда дружелюбный и преданный друг.{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.youloveit.ru/uploads/posts/2018-07/1532102575_youloveit_ru_humanizaciya_gubka_bob07.jpg"
            alt=""
          />
          <div className="intro">
            <h1 className="name">Крабс</h1>
            <p>
              <span style={{ color: "yellow" }}>Тип работы:</span> Владелец
            </p>
            <p>
              <span style={{ color: "yellow" }}>Родился:</span> либо 30 ноября
              1942 года, либо 25 сентября 1960 года{" "}
            </p>
            <p>
              <span style={{ color: "yellow" }}>Характер:</span> Жаден и скуп,
              его изображают таким же плохим, как Планктона. Единственное, что
              его интересует - это деньги.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
