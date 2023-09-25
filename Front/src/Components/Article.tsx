import React from 'react';
import "../Styles/article.css"
import Bottle from '../Assets/Bouteille-vin-rouge.jpeg'

const articlesData = [
    {
      id: 1,
      title: "Article 1",
      trend: "Tendance/Events 1",
      origin: "Origin 1",
      domain: "Domain 1",
      note: "Note 1/20",
      linkComments: "Link_comments 1",
      avis: "Avis 1",
    },
    {
      id: 2,
      title: "Article 2",
      trend: "Tendance/Events 2",
      origin: "Origin 2",
      domain: "Domain 2",
      note: "Note 2/20",
      linkComments: "Link_comments 2",
      avis: "Avis 2",
    },
    {
      id: 3,
      title: "Article 3",
      trend: "Tendance/Events 3",
      origin: "Origin 3",
      domain: "Domain 3",
      note: "Note 3/20",
      linkComments: "Link_comments 3",
      avis: "Avis 3",
    },

  ];

function Article ({article}) {
    return (
        <div className="Space_Bottle Color">
            <div className="Bottle Color">
                <img src={Bottle} alt="Bouteille de vin" className="Wine_Bottle"/>
                </div>
                <div className='Space_characters'>
                <div className="Tendance Color">
                    <span>{article.trend}</span>
                </div>
                <div className="Origin Color">
                    <span>{article.origin}</span>
                </div>
                <div className="Domain_Name Color">
                    <span>{article.domain}</span>
                </div>
                <div className="Note Color">
                    <span>{article.note}</span>
                </div>
                <div className="Link_comments Color">
                    <span>{article.linkComments}</span>
                </div>
                <div className='Avis_Space'>
                    <div className="Avis Color">
                    <span>{article.avis}</span>
                    <div className="Button Color">
                        <span>Button</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  function ArticleList() {
    return (
      <div className="article_container">
        {articlesData.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    );
  }
  
  export default ArticleList;