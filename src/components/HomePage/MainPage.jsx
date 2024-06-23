import React from "react";

const MainPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          position: "relative",
        }}
        className="home-main-page"
      >
        <div
          style={{
            width: "100%",
            position: "relative",
          }}
          className="content"
        >
          <img
            style={{ width: "100%" }}
            src="https://androidow.com/uploads/posts/2023-04/gubka-bob-na-kuhne_1.jpg"
            alt="SpongeBob in the kitchen"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 80%)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                maxWidth: "300px",
                color: "white",
              }}
            >
              <img
                src="https://static.okko.tv/images/v4/d779a16b-4ecf-4e9b-9d2d-1ae2ba93f963?width=840&scale=2&quality=80&mediaType=webp&trimBorder=true"
                alt="Krusty Krab Logo"
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  borderRadius: "10px",
                }}
              />
              <h1
                style={{
                  width: "700px",
                  fontSize: "50px",
                  marginLeft: "10px",
                  // fontFamily: "Amatic SC, cursive",
                }}
              >
                Welcome to the Krusty Krab!
                {/* Красти Краб, в ранних эпизодах Красти Крабс 
                - это ресторан быстрого питания в Бикини Боттом, основанный и
                принадлежащий Юджину Крабсу. Является конкурентом ресторана "Чам
                Баккет". */}
              </h1>
              <h2
                style={{
                  width: "700px",
                  fontSize: "30px",
                  marginLeft: "10px",
                }}
              >
                Home of the finest fast food in Bikini Bottom.
              </h2>
              <h3
                style={{
                  width: "700px",
                  fontSize: "30px",
                  marginLeft: "10px",
                  // fontFamily: "Amatic SC, cursive",
                }}
              >
                {" "}
                Our famous Krabby Patties are made with a secret formula that
                will leave you wanting more. Come and enjoy the best dining
                experience under the sea!
              </h3>
            </div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
