import React, { useState, useEffect } from 'react';

const Historique = () => {
  const [history, setHistory] = useState([]);

  // Charger l'historique depuis localStorage au démarrage
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("gameHistory")) || [];
    setHistory(savedHistory);
  }, []);

  return (
    <div>
      <h3>Historique des jeux</h3>
      {/* Si aucun jeu n'est enregistré, afficher un message */}
      {history.length === 0 ? (
        <p>Aucun historique de jeu trouvé.</p>
      ) : (
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              Score: {entry.score} - Temps: {entry.time} secondes
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Historique; // Exportation par défaut
