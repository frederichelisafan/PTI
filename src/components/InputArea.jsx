import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import arrow from "../assets/arrow.png";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const [player, setPlayer] = useState("1st Player");
  const [data, setData] = useState([]);
  const [playerCount, setPlayerCount] = useState(0);
  const [num, setNum] = useState(1);
  const [weather, setWeather] = useState(null);
  const url = "https://dog.ceo/api/breeds/image/random";
  const nav = useNavigate();
  const urlWeather =
    "https://api.openweathermap.org/data/3.0/onecall?lat=-6.28&lon=106.64&appid=df001b0ea2f7bc779b5fef1f9cfa240a";

  let i = 1;

  const input = {
    object: data.message,
    totalPlayer: playerCount
  };

  function addNum() {
    if (inputText !== "") {
      setPlayerCount(playerCount + 1);
      setNum(num + 1);
    }
  }

  function PlayerChange() {
    if (num === 1) {
      setPlayer("2nd Player");
      i++;
      // console.log(i);
    } else if (num === 2) {
      setPlayer("3rd Player");
      i++;
      // console.log(i);
    } /*if (i >= 3)*/ else {
      setPlayer(num + 1 + "th Player");
      i++;
      // console.log(i);
    }
    // console.log(playerCount);
  }

  function getDog() {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }

  // function getWeather() {
  //   axios.get(urlWeather).then((response) => {
  // setWeather(response.data.weather[0].main);
  //   });
  // }

  const playGame = () => {
    if (playerCount < 2) {
      alert("Not enough player!");
    } else {
      nav("/Game", {
        state: input
        // {
        //   object: data.message,
        //   totalPlayer: playerCount
        // }
      });
    }
  };

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  useEffect(() => {
    getDog();
    // getWeather();
  });

  function handleSlide(event) {
    getDog();
  }

  return (
    <div className="form">
      <img id="arrow1" src={arrow} alt="arrow" onClick={handleSlide} />
      <img id="dog" src={data.message} alt="chosenDog" />
      <img id="arrow2" src={arrow} alt="arrow" onClick={handleSlide} />
      <h3>{player}</h3>
      <input
        className="insertname"
        type="text"
        id="addName"
        placeholder="Insert Name"
        onChange={handleChange}
        value={inputText}
        required
      />
      <br />
      <br />

      <div className="addplay-button">
        <button
          className="addplayer-button"
          onClick={() => {
            props.onAdd(inputText);
            setInputText("");
            PlayerChange();
            addNum();
          }}
        >
          Add Player
        </button>
        <button
          className="play-button"
          onClick={() => {
            playGame();
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
}

export default InputArea;
