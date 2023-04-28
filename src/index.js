//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const date = new Date();

const time = date.getHours();

const customStyle = {
  color: "orange",
  borderBottomColor: "orange"
};

function currentTime(time) {
  if (time >= 0 && time < 12) {
    customStyle.color = "red";
    customStyle.borderBottomColor = "red";
    return "Good Morning";
  } else if (time >= 12 && time < 18) {
    customStyle.color = "green";
    customStyle.borderBottomColor = "green";
    return "Good Afternoon";
  } else {
    customStyle.color = "blue";
    customStyle.borderBottomColor = "blue";
    return "Good Evening";
  }
}

const textSet = currentTime(time);

root.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {" "}
      {textSet}{" "}
    </h1>
  </div>
);
