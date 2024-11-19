import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      background1: "none",
      color1: "black",
      background2: "none",
      color2: "black",
    };
  }

  getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let randomColor =
      "#" +
      red.toString(16).padStart(2, "0") +
      green.toString(16).padStart(2, "0") +
      blue.toString(16).padStart(2, "0");

    let oppositeRed = 255 - red;
    let oppositeGreen = 255 - green;
    let oppositeBlue = 255 - blue;

    let oppositeColor =
      "#" +
      oppositeRed.toString(16).padStart(2, "0") +
      oppositeGreen.toString(16).padStart(2, "0") +
      oppositeBlue.toString(16).padStart(2, "0");

    return {
      background: randomColor,
      text: oppositeColor,
    };
  }

  render() {
    return (
      <div className="component-container">
        <p>Місце народження: 27 грудня 2004, м. Київ</p>
        <p>Освіта: ЗОШ №8 м. Васильків, НТУУ "КПІ", м. Київ</p>
        <p>Хоббі:</p>
        <ul>
          <li>Спорт</li>
          <li>Туризм</li>
          <li>Гітара</li>
          <li
            style={{
              backgroundColor: this.state.background1,
              color: this.state.color1,
            }}
            onClick={() => {
              const colors = this.getRandomColor();
              this.setState({
                background1: colors.background,
                color1: colors.text,
              });
            }}
          >
            Плавання
          </li>
        </ul>
        <p
          style={{
            backgroundColor: this.state.background2,
            color: this.state.color2,
          }}
          onClick={() => {
            const colors = this.getRandomColor();
            this.setState({
              background2: colors.background,
              color2: colors.text,
            });
          }}
        >
          Улюблені фільми:
        </p>
        <ol>
          <li>Дюна</li>
          <li>The Lord of the Rings</li>
          <li>Зоряні війни</li>
          <li>Зелена миля</li>
        </ol>

        <p>
          Монтевідео — найпівденніша столиця Америки. Координати: 34°53′01″ пд.
          ш. 56°10′55″ зх. д.. Місто розташоване у південній частині країни, на
          території однойменного департаменту, найменшого серед 19 департаментів,
          на північному березі Ріо-де-ла-Плата, рукава Атлантичного океану, який
          відділяє південне узбережжя Уругваю від північного узбережжя Аргентини.
          Буенос-Айрес знаходиться за 230 км на захід від Монтевідео. Річка
          Санта-Лусія утворює природний кордон між Монтевідео і департаментом
          Сан-Хосе на заході. На півночі і сході місто межує з департаментом
          Канелонес, річка Карраско утворює природний кордон на сході. Берегова
          лінія утворює південний кордон міста, де перемежовуються скелясті
          виступи і піщані пляжі.
        </p>
      </div>
    );
  }
}

export default Content;
