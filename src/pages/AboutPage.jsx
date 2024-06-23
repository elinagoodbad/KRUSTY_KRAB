import React, { useState } from "react";
import "./AboutPage.css";
import { colors } from "@mui/material";
import Detail from "../components/products/Detail";

const AboutPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="body_about">
      <h2>ABOUT US</h2>
      <div className="body">
        <div className="container">
          <div className="card">
            <img
              src="https://kartinki.pics/uploads/posts/2022-02/1645493326_58-kartinkin-net-p-kartinki-spanch-boba-61.jpg"
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
              src="https://kartinki.pics/uploads/posts/2022-12/1670646973_11-kartinkin-net-p-kartinki-skvidvarda-vkontakte-11.jpg"
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
                <span style={{ color: "yellow" }}>Характер:</span>самый умный,
                саркастическое отношение и видит других как нецивилизованных
                дебилов{" "}
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMjBhYjFmZTQtMWVmZS00ZDNkLWIwN2UtODBhNmRlYTgxNzgwXkEyXkFqcGdeQXVyMTAzNzk5Mjcx._V1_.jpg"
              alt=""
            />
            <div className="intro">
              <h1 className="name">Красти Крабс</h1>
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
      <Detail open={open} handleClose={handleClose} />
    </div>
  );
};

export default AboutPage;
