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
        }}
        className="home-main-page"
      >
        <div
          style={{
            width: "100%",
          }}
          className="content"
        >
          <img
            style={{ width: "100%", border: "3px solid red" }}
            src="https://androidow.com/uploads/posts/2023-04/gubka-bob-na-kuhne_3.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
