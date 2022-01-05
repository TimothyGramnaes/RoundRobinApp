import * as React from "react";
import "../../layout/container.css";
import "../../layout/gameContainer.css";
import "../../layout/primaryBtn.css";
import "../../layout/secondaryBtn.css";
import NavigationBar from "../../components/NavigationBar";
import { Divider } from "@mui/material";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import OutputBarRound from "../../components/OutputBarRound";
// import MakeRoundRobinPairings from "../../Utilities/RoundRobinCalculator";
import RoundRobinCalculator from "../../Utilities/RoundRobinCalculator";

const Round = () => {
  const [disable, setDisable] = React.useState(true); //Använd denna hook för att göra knappen klickbar efter att resultaten är ifyllda

  return (
    <>
      <div className="container">
        <NavigationBar />
        <Divider />
        <div className="gameContainer">
          <div style={{ paddingTop: "2rem" }}>
            <h2 style={{ margin: "0" }}>Round 1</h2>
          </div>
          <OutputBarRound 
    player1="Erlef Doedsdufva"
    player2="Tony McHallumi"/>
    <RoundRobinCalculator />
          <div style={flexBetween}>

            <div>
              <p style={paraStyle}>End Tournament</p>
            </div>
            <div>
              <p style={paraStyle}>Pause Round</p>
            </div>
          </div>
        </div>
        <div style={btnContainer}>
          <Link style={btnWidth} to="/create-tournament" className="secondaryBtn">
            Back
          </Link>
          <button style={btnWidth} className="primaryBtn" disabled={disable}>
            Next Round
          </button>
        </div>
      </div>
    </>
  );
};

const paraStyle: CSSProperties = {
  color: "#FA04F6",
  cursor: "pointer",
};
const flexBetween: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "1rem",
  marginBottom: "0",
};
const btnContainer: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",
  width: "100%",
};
const btnWidth: CSSProperties = {
  width: "48%",
};

export default Round;
