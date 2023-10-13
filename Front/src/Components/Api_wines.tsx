import React, { useEffect, useState } from 'react';
import "../Styles/api_wines.css";
import WineItem from "./Article.tsx";
import Header from './Header.tsx';

type WineType = {
  id : string | number;
  name: string;
  appellation : string; 
  price: number;
  ratings: number;
  winery: string; 
  vintage : number;
  average_ratings: number;
};

function WinesList() {
      const apiUrl = 'http://localhost:3000/wines';
      const [data, setData] = useState<WineType[]>([]);
      const [loading, setLoading] = useState(true);
      const [sortByPrice, setSortByPrice] = useState(false);
      const [minPrice, setMinPrice] = useState("");
      const [maxPrice, setMaxPrice] = useState("");
    

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

      const handleSortByPrice = () => {

        const sortedData = [...data];
        if (sortByPrice) {
          sortedData.sort((a: WineType, b: WineType) => parseFloat(b.price) - parseFloat(a.price));
        } else {
          sortedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        }
        setData(sortedData);
        setSortByPrice(!sortByPrice);
      };

      const applyFilters = () => {
        const filteredData = data.filter(wine => {
          const price = parseFloat(wine.price);
          if (minPrice !== "" && maxPrice !== "") {
            return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
          } else if (minPrice !== "") {
            return price >= parseFloat(minPrice);
          } else if (maxPrice !== "") {
            return price <= parseFloat(maxPrice);
          }
          return true;
        });
        setData(filteredData);
      };


      if (loading) {
        return <p>Chargement en cours...</p>;
      }


      return (
        <div>
          <Header 
            handleSortByPrice={handleSortByPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            applyFilters={applyFilters}
          
            />
          <ul>
            <div className='article_container'>
              {data.map(wine => (
              <WineItem
              key={`${wine.ratings}-${wine.appellation}`}
              id={`${wine.ratings}-${wine.appellation}`}
              name={wine.name}
              winery={wine.winery}
              appellation={wine.appellation}
              vintage={wine.vintage}
              ratings={wine.ratings}
              average_ratings={wine.average_ratings}
              price={wine.price}
              />
              ))}
            </div>
          </ul>
        </div>
      );
    }

    export default WinesList;