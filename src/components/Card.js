import React from 'react';

const Card = ({ details }) => {
  const ingredients = details.ingredients.split(",")
    .map((items) => { return <li key={items}>{items}</li> })
  
  const instructions = details.instructions.split("\n").map((items) => {
    return <li key={items}>{items}</li>;
  });
  
  const requireImg = (path) => {
    try {
      return path
    } catch (error) {
      return "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.RiuFLQ3a2SazAePR6IWuhAAAAA%26pid%3DApi&f=1";
    }
  }
  return (
    <div className="card">
      <div className="image">
        <img src={requireImg(details.image)} alt={details.nom} />
      </div>
      <div className="recette">
        <h2>{details.nom}</h2>
        <ul className="liste-ingredients">{ingredients}</ul>
        <ol className="liste-instructions">{instructions}</ol>
      </div>
    </div>
  );
};

export default Card;