import React from 'react';

const AdminForm = ({ recipes, updateRecipe, id: key, deleteRecipe }) => {
  const recipe = recipes[key]

  const handleChange = (e, key) => {
    const { name, value } = e.target
    const recipe = recipes[key]
    recipe[name] = value
    updateRecipe(key, recipe)
  }


  return (
    <div className="card">
      <form className="admin-form">
        <input
          type="text"
          value={recipe.nom}
          name="nom"
          onChange={e => handleChange(e, key)}
          placeholder="Nom de la recette"
        />
        <input
          type="text"
          value={recipe.image}
          name="image"
          onChange={e => handleChange(e, key)}
          placeholder="url de l'image"
        />
        <textarea
          name="ingredients"
          value={recipe.ingredients}
          rows="3"
          onChange={e => handleChange(e, key)}
          placeholder="Liste des ingredients"
        />
        <textarea
          name="instructions"
          value={recipe.instructions}
          rows="15"
          onChange={e => handleChange(e, key)}
          placeholder="Liste des instructions"
        />
      </form>
      <button onClick={() => deleteRecipe(key)}>Supprimer</button>
    </div>
  );
};

export default AdminForm;