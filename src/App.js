import "./styles.css";
import logo from "./assets/logo.png";
import playerImage from "../src/assets/messi.jpg";
import arrow from "../src/assets/arrow.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import InputArea from "./components/InputArea";
import PlayerList from "./components/PlayerList";
import homeaudio from "./assets/game-audio.mp3";
import mute from "./assets/mute.png";
import unmute from "./assets/unmute.png";
import axios from "axios";

export default function App() {
  const [audiobutton, setAudioButton] = useState(mute);
  const [name, setName] = useState([]);
  const [audio, setAudio] = useState(false);
  const nav = useNavigate();

  const goAboutUs = () => {
    nav("/about");
  };

  function addName(inputText) {
    setName((prevName) => {
      return [...prevName, inputText];
    });
  }

  function deleteName(id) {
    setName((prevName) => {
      return prevName.filter((name, index) => {
        return index !== id;
      });
    });
  }

  function AudioButtonClicked() {
    if (audio === true) {
      setAudio(false);
      setAudioButton(mute);
      document.getElementById("bgsound").pause();
    } else if (audio === false) {
      setAudio(true);
      setAudioButton(unmute);
      document.getElementById("bgsound").play();
    }
    document.getElementById("bgsound").loop = true;
  }

  const [inputName, setInputName] = useState("");
  const [playerCount, setPlayerCount] = useState(0);
  const [playerName, setPlayerName] = useState([]);

  // const playGame = () => {
  //   // if(playerCount < 2) {
  //   //   alert("Not enough player!");
  //   // }else {
  //   nav("/Game");
  //   // }
  // };
  useEffect(() => {
    document.getElementById("bgsound").pause();
  }, []);

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)"
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)"
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)"
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)"
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )"
  });

  function cobaResponsive() {
    if (isMobileDevice) {
      return (
        <div className="mobile">
          {isMobileDevice && <InputArea onAdd={addName} />}
        </div>
      );
    } else if (isBigScreen) {
      return (
        <div className="mobile">
          {isBigScreen && <InputArea onAdd={addName} />}
        </div>
      );
    } else if (isTabletDevice) {
      return (
        <div className="mobile">
          {isTabletDevice && <InputArea onAdd={addName} />}
        </div>
      );
    } else if (isLaptop) {
      return (
        <div className="mobile">
          {isLaptop && <InputArea onAdd={addName} />}
        </div>
      );
    } else if (isDesktop) {
      return (
        <div className="mobile">
          {isDesktop && <InputArea onAdd={addName} />}
        </div>
      );
    }
  }

  return (
    <div className="App">
      <div id="title">
        <h1>Don't Take Spike’s Bones</h1>
        <img id="logo" src={logo} alt="logo" />
        <hr />
      </div>
      <div id="body">
        <div className="hometopbutton">
          <button id="aboutus-button" onClick={goAboutUs}>
            About Us
          </button>
          <div className="audiobutton">
            <audio id="bgsound">
              <source src={homeaudio} type="audio/mp3" />
            </audio>
            <img
              id="mute-button"
              src={audiobutton}
              alt="mute-button"
              onClick={AudioButtonClicked}
            />
          </div>
        </div>
        <div className="mobile">
          {isMobileDevice && <InputArea onAdd={addName} />}
        </div>

        <br />
        <br />
        <b>Player List</b>
        <br />
        <div>
          <ul>
            {name.map((nameList, index) => (
              <PlayerList
                key={index}
                id={index}
                text={nameList}
                onChecked={deleteName}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
