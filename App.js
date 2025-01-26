// App.js
import React, { useState } from "react";
import Game from "./Game";
import Settings from "./Settings";
import Historique from "./Historique";

const App = () => {
  const [cardCount, setCardCount] = useState(16); // Nombre initial de cartes
  const [background, setBackground] = useState("#fff"); // Couleur du fond d'écran
  const [showSettings, setShowSettings] = useState(false); // Afficher les paramètres
  const [showHistorique, setShowHistorique] = useState(false); // Afficher l'historique

  // Fonction appelée à la fin du jeu pour enregistrer le score et le temps
  const handleGameOver = (score, startTime, endTime) => {
    const timeInSeconds = Math.round((endTime - startTime) / 1000); // Calcul du temps en secondes
    const newHistory = JSON.parse(localStorage.getItem("gameHistory")) || [];
    newHistory.push({ score, time: timeInSeconds });
    localStorage.setItem("gameHistory", JSON.stringify(newHistory)); // Sauvegarde dans localStorage
  };

  return (
    <div>
      <h1>Jeu de Memory</h1>
      <button onClick={() => setShowSettings(!showSettings)}>Paramètres</button>
      <button onClick={() => setShowHistorique(!showHistorique)}>Historique</button>

      {/* Afficher les paramètres si showSettings est vrai */}
      {showSettings && <Settings setCardCount={setCardCount} setBackground={setBackground} />}
      
      {/* Afficher l'historique si showHistorique est vrai */}
      {showHistorique && <Historique />}
      
      {/* Afficher le jeu avec les paramètres actuels */}
      <Game cardCount={cardCount} background={background} onGameOver={handleGameOver} />
    </div>
  );
};

export default App;


