import React from "react";
import Card from "./components/Card";
import arrow from "./assets/arrow.png";
import { useNavigate } from "react-router-dom";

const anggotakelompok = [
  {
    name: "Frederich Elisafan Latuputty",
    nim: "00000044441",
    imgURL:
      "https://www.biography.com/.image/t_share/MTgwMzQyOTk2OTY3ODkyODQ0/gettyimages-490703338.jpg",
    email: "frederich.latuputty@student.umn.ac.id"
  },

  {
    name: "Putri Syafira Alodia Rivaldi",
    nim: "00000043974",
    imgURL:
      "https://static.vecteezy.com/system/resources/previews/003/450/409/original/muslim-hijab-girl-illustration-vector.jpg",
    email: "putri.rivaldi@student.umn.ac.id"
  },

  {
    name: "Muhammad Farand Rafif H",
    nim: "00000053744",
    imgURL:
      "data:image/jpeg;base64,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",
    email: "muhammad.handoko@student.umn.ac.id"
  },

  {
    name: "Bismikal Kaukesatu",
    nim: "00000053893",
    imgURL:
      "https://cdn-image.hipwee.com/wp-content/uploads/2020/09/hipwee-meme4.png",
    email: "bismikal.kaukesatu@student.umn.ac.id"
  }
];

function about() {
  const nav = useNavigate();

  const mainMenu = () => {
    nav("/");
  };

  return (
    <div>
      <img
        className="aboutbackbutton"
        src={arrow}
        alt="arrow"
        onClick={mainMenu}
      />
      <center>
        <h1>
          <b>About Us</b>
        </h1>
      </center>
      <br />
      <br />
      <Card
        name={anggotakelompok[0].name}
        imgURL={anggotakelompok[0].imgURL}
        nim={anggotakelompok[0].nim}
        email={anggotakelompok[0].email}
      />

      <Card
        name={anggotakelompok[1].name}
        imgURL={anggotakelompok[1].imgURL}
        nim={anggotakelompok[1].nim}
        email={anggotakelompok[1].email}
      />

      <Card
        name={anggotakelompok[2].name}
        imgURL={anggotakelompok[2].imgURL}
        nim={anggotakelompok[2].nim}
        email={anggotakelompok[2].email}
      />

      <Card
        name={anggotakelompok[3].name}
        imgURL={anggotakelompok[3].imgURL}
        nim={anggotakelompok[3].nim}
        email={anggotakelompok[3].email}
      />
    </div>
  );
}

export default about;
