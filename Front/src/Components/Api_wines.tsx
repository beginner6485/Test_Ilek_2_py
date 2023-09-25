
import React, { useEffect, useState } from 'react';
import "../Styles/api_wines.css"


function WinesList() {
  const apiUrl = 'http://localhost:5005/wines';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`La requête a échoué avec le code d'état ${response.status}`);
        }
        return response.json();
      })
      .then(dataFromApi => {
        setData(dataFromApi);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la requête :', error);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div>
      <h1 className='wine_list'>Liste des vins</h1>
      <ul>
        {data.map(wine => (
          <li key={wine.id}>
            {wine.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default WinesList;
