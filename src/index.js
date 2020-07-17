import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props.name);
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}



ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com" ></Card>

    <Card name="JDR Talaga" img="https://cdn.pixabay.com/photo/2016/11/16/19/27/brad-pitt-1829794__340.jpg" tel="9123456789" email="brad@email.com"></Card>

  </div>,
  document.getElementById("root")
);
