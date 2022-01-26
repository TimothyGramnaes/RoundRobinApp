import * as React from "react";
import "../../layout/container.css";
import "../../layout/gameContainer.css";
import "../../layout/primaryBtn.css";
import "../../layout/secondaryBtn.css";
import "../round/round.css";
import NavigationBar from "../../components/NavigationBar";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { TournamentStore } from "../../Contexts/tournamentContext";
import Timer from "../../components/Timer";
import OutputBarRound from "../../components/OutputBarRound";
import BasicModal from "../../components/WLDmodal";
import TransitionsModal from "../../components/WinnerModal";
import { useState } from "react";
import { useEffect } from "react";
import Tournament from "../tournament";

const Round = () => {
  const settingContext = TournamentStore();
  /////// State för Rounds //////////////////
  const [round, setRound] = React.useState(0);
  const [showWinnerModal, setShowWinnerModal] = useState(false) //// Hook för att visa vinnarmodal
  const [disable, setDisable] = React.useState(true); //Använd denna hook för att göra knappen klickbar efter att resultaten är ifyllda
  /////////// Updaterar alla context-states vid en refresh //////////
  React.useEffect(() => {
    try {
      let pairings = JSON.parse(localStorage.getItem("pairings") || "");
      settingContext.setPairings(pairings);
    } catch (error) {}

    try {
      let players = JSON.parse(localStorage.getItem("players") || "");
      settingContext.setPlayerList(players);
    } catch (error) {}

    ////// Ökar statet med +1 ////////////////
    try {
      let lsRound = JSON.parse(localStorage.getItem("round") || "");
      setRound(lsRound);
    } catch (error) {}
  }, []);

  let amountOfplayers = settingContext.playerList.length;
  
  let nxtRoundButtonText = "Next Round";
  if ((round + 2) === amountOfplayers) {
    nxtRoundButtonText = "Final Score!"
  }
  ////// Ökar statet med +1 och updaterar round-LS ////////////////

  function incrementRound() {
    ableNextRound();
    if (((round + 2) === amountOfplayers)) {
      showWinner()
      } else {      
      setRound((prevState) => {
        let newRound = prevState + 1;
        localStorage.setItem("round", JSON.stringify(newRound));
        return newRound;
      });
    }
  } 
  function showWinner() {
    setShowWinnerModal(true);
  }

  ////// Togglar disable på next round-knappen /////////
  const ableNextRound = () => {
    setDisable(!disable && true);
  };

 // let matchId = settingContext.tournament.


  return (
    <>
      <div className="container">
        <NavigationBar />
        <Divider />
        <div className="gameContainer">
          <div className="headingWrapper flexBetween">
            <h3 className="zeroMargin">{`Round-${round + 1}`}</h3>
            <Timer hours={0} minutes={50} seconds={0} />
          </div>
          <div className="textWrapper">
            <div className="alignBottom marginBottom">
              <p className="zeroMargin secondaryColor">Pairings:</p>
            </div>
            <div className="questionMark">
              <BasicModal />
            </div>
            <div className="scoringContainer alignBottom marginBottom">
              <p className="zeroMargin">Result:</p>
              <p className="zeroMargin secondaryColor">W-L-D</p>
            </div>
          </div>
          <div className="playerContainer">
            <OutputBarRound
              key={Math.floor(Math.random() * round)}
              //tournamentPairings={settingContext.pairings}
              round={round}
              ableNextRound={ableNextRound}
            />
            <div>{showWinnerModal ? 
            <TransitionsModal />
             : ''}</div>
             </div>
          <div className="linkWrapper">
            <Link to="/" className="linkStyle">
              End Tournament
            </Link>
          </div>
          <div className="btnContainer">
            <button
              onClick={incrementRound}
              className="primaryBtn btnWidth"
              disabled={disable}
            >
              {nxtRoundButtonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Round;
