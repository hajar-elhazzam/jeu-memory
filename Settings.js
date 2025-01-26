import React from 'react';

const Settings = ({ setCardCount, setBackground }) => {
  const handleCardCountChange = (e) => {
    setCardCount(Number(e.target.value)); // Convertir la valeur en nombre
  };

  const handleBackgroundChange = (e) => {
    setBackground(e.target.value); // Récupérer la couleur choisie
  };

  return (
    <div>
      <h3>Paramètres du jeu</h3>
      
      <label>
        Nombre de cartes:
        <select onChange={handleCardCountChange}>
          <option value={4}>4</option>
          <option value={16}>16</option>
          <option value={32}>32</option>
        </select>
      </label>

      <br />
      
      <label>
        Couleur de fond:
        <input type="color" onChange={handleBackgroundChange} />
      </label>
    </div>
  );
};

export default Settings; // Exportation par défaut
