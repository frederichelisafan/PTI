import "../styles.css";
import logo from "../assets/logo.png";
// import arrow from "../assets/arrow.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bone from "../assets/bone.png";
import backbutton from "../assets/back_button.png";
import weather from "../assets/weatherlogo.png";
import mute from "../assets/mute.png";
import unmute from "../assets/unmute.png";
import dog from "../assets/dog.png";
// import "bootstrap/dist/css/bootstrap.min.css";
import bonesound from "../assets/bonesound.mp3";
import { useLocation } from "react-router-dom";
import gamemusic from "../assets/gameaudio.mp3";
import gameover from "../assets/gameover.mp3";
// import InputArea from "./InputArea";
import { useMediaQuery } from "react-responsive";

function Game(props) {
  const [audiobutton, setAudioButton] = useState(unmute);
  const [audio, setAudio] = useState(true);
  const [timer, setTimer] = useState(10);
  const [playerTurn, setPlayerTurn] = useState(1);
  // const gameaudio = new Audio(gamemusic);
  const loc = useLocation();
  const input = loc.state;
  // const totalPlayer = input.totalPlayer;
  const mine = Math.floor(Math.random() /* totalPlayer*/ * 5) + 1;
  const landmine = useState(mine);

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
  //test
  // const sleepingDog = input.object;

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

  function gameOver() {
    document.getElementById("bgsound").pause();
    const gameoveraudio = new Audio(gameover);
    gameoveraudio.play();
    document.getElementById("end").style.display = "";
    document.getElementById("maingame").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("backlogoweather").style.display = "none";
  }

  function BoneSound() {
    const boneaudio = new Audio(bonesound);
    boneaudio.play();
  }

  const nav = useNavigate();
  const mainMenu = () => {
    nav("/");
  };

  function handleOnClick(e) {
    const target = e.currentTarget.id;
    BoneSound();
    document.getElementById(target).style.display = "none";
    setTimer(10);
    setPlayerTurn(playerTurn + 1);
    // if(playerTurn === totalPlayer) {
    //   setPlayerTurn(0);
    // }
    if (target === landmine) {
      gameOver();
    }
  }

  useEffect(() => {
    document.getElementById("bgsound").play();
  }, []);

  useEffect(() => {
    let interval = null;
    if (timer !== 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
        // console.log("countdown", timer);
      }, 1000);
    } else if (timer === 0) {
      gameOver();
      console.log("clear", timer);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="Game">
      <div id="title" style={{ display: "" }}>
        <h1>
          <b>Don't Take Spike’s Bones</b>
        </h1>
      </div>
      <div id="backlogoweather" style={{ display: "" }}>
        <img
          onClick={mainMenu}
          id="backbutton"
          src={backbutton}
          alt="backbutton"
        />
        <img id="logo" src={logo} alt="logo" />
        <img id="weatherlogo" src={weather} alt="weather" />
      </div>
      {/* <button onClick={mainMenu}>button sementara</button> */}
      <hr />
      <div id="maingame" style={{ display: "" }}>
        <div className="display">
          <h4>Turn: Player</h4>
          <h4>Timer: {timer}</h4>
        </div>
        <div className="game-board">
          <div className="bone-board1">
            <img
              id="bone1"
              src={bone}
              alt="bone1"
              name="bone1"
              style={{ display: "" }}
              onClick={handleOnClick}
            />
            <img
              id="bone2"
              src={bone}
              alt="bone2"
              name="bone2"
              style={{ display: "" }}
              onClick={handleOnClick}
            />
            <img
              id="bone3"
              src={bone}
              alt="bone3"
              name="bone3"
              style={{ display: "" }}
              onClick={handleOnClick}
            />
            <img
              id="bone4"
              src={bone}
              alt="bone4"
              name="bone4"
              style={{ display: "" }}
              onClick={handleOnClick}
            />
            <img
              id="bone5"
              src={bone}
              alt="bone5"
              name="bone5"
              style={{ display: "" }}
              onClick={handleOnClick}
            />
          </div>

          {/* <div className="bone-board">
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
            <img id="bones" src={bone} alt="bone"/>
        </div> */}

          <div className="testing">
            <div className="bone-board2">
              <img
                id="bone6"
                src={bone}
                alt="bone6"
                name="bone6"
                style={{ display: "" }}
                onClick={handleOnClick}
              />
              <img
                id="bone7"
                src={bone}
                alt="bone7"
                name="bone7"
                style={{ display: "" }}
                onClick={handleOnClick}
              />
            </div>
            <div className="dog-image">
              <img id="dog" src={dog} alt="dog" />
            </div>
            <div className="bone-board3">
              <img
                id="bone8"
                src={bone}
                alt="bon8e"
                name="bone8"
                style={{ display: "" }}
                onClick={handleOnClick}
              />
              <img
                id="bone9"
                src={bone}
                alt="bone9"
                name="bone9"
                style={{ display: "" }}
                onClick={handleOnClick}
              />
            </div>
          </div>

          <div className="bone-board4">
            <img
              id="bone10"
              src={bone}
              alt="bone10"
              name="bone10"
              style={{ display: "" }}
              onClick={handleOnClick}
            />
            <img
              id="bone11"
              src={bone}
              alt="bone11"
              name="bone11"
              style={{ display: "" }}
              onClick={handleOnClick}
            />
            <img
              id="bone12"
              src={bone}
              alt="bone12"
              name="bone12"
              style={{ display: "" }}
              onClick={handleOnClick}
            />
            <img
              id="bone13"
              src={bone}
              alt="bone13"
              name="bone13"
              style={{ display: "" }}
              onClick={handleOnClick}
            />
            <img
              id="bone14"
              src={bone}
              alt="bone14"
              name="bone14"
              style={{ display: "" }}
              onClick={handleOnClick}
            />
          </div>
        </div>
        <div className="audiobutton">
          <audio id="bgsound">
            <source src={gamemusic} type="audio/mp3" loop={true} />
          </audio>
          <img
            id="unmute-button"
            src={audiobutton}
            alt="unmute-button"
            onClick={AudioButtonClicked}
          />
        </div>
      </div>
      <div id="end" style={{ display: "none" }}>
        {/* Isinya tampilan gameOver */}
        <h1 className="ohNo">You woke him up!!</h1>
        <img id="awakeDog" src={logo} alt="logo" />
        <div className="reset-button">
          <button className="mainmenu-button" onClick={mainMenu}>
            Main Menu
          </button>
          <button className="playagain-button" onClick={mainMenu}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
