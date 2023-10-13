import React from 'react';
import "../Styles/article.css";
import Bottle from "../Assets/Bouteille-vin-rouge.jpeg";
import "../Styles/article.css";


type WineItemProps = {
  name: string;
  winery: string;
  appellation: string;
  vintage: number;
  ratings: number;
  average_ratings: number;
  price: number;
};

  function WineItem({
    name,
    winery,
    appellation,
    vintage,
    ratings,
    average_ratings,
    price,
  }: WineItemProps) {
    return (
      <div className="article" key={`${ratings}-${appellation}`}>
        <div className="Space_Bottle Color">
          <div className="Bottle Color">
            <img src={Bottle} alt="Bouteille de vin" className="Wine_Bottle" />
          </div>
          <div className="Space_characters">
            <div className="Tendance Color">
              <span>{ratings}</span>
            </div>
            <div className="Origin Color">
              <span>{winery}</span>
            </div>
            <div className="Domain_Name Color">
              <span>{appellation}</span>
            </div>
            <div className="Note Color">
              <span>{ratings}</span>
            </div>
            <div className="Link_comments Color">
              <span>linkComments</span>
            </div>
            <div className="Avis_Space">
              <div className="Avis Color">
                <span>avis</span>
                <div className="Button Color">
                  <span>Ajouter</span>
                </div>
              </div>
            </div>
            <span className="price_article Color">{price} €</span>
            <span className="lien_article Color">Site de Vente</span>
          </div>
        </div>
      </div>
    );
}

export default WineItem;
