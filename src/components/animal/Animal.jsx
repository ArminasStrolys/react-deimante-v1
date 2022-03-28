import React from "react";
import animals from "../../data/data";

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Animal() {
  return (
    <>
      {animals.map((animal) => {
        return (
          <div key={animal.id} style={{ margin: "30px auto" }} className="ui card">
            <div key={animal.key} className="image" href="#" alt="">
              <img src={animal.img} alt="" />
            </div>
            <div className="content"
              style={{backgroundColor: `rgb(${rndNum(0, 255)}, ${rndNum(0, 255)}, ${rndNum(0, 255)})`}}>
              <p className="header" href="#">
                {animal.animal}
              </p>
              <div className="meta">
                <p>ID: {animal.id}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
