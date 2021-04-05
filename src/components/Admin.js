import React, { Component } from 'react';
import AddRecipe from './AddRecipe';
import AdminForm from './AdminForm';

class Admin extends Component {
  render() {
    const { addRecipe, recipes, exampleRecipe, updateRecipe, deleteRecipe } = this.props
    return (
      <div className="cards">
        <AddRecipe addRecipe={addRecipe} />
        {
          Object.keys(recipes)
            .map(key => <AdminForm
              key={key}
              id={key}
              updateRecipe={updateRecipe}
              deleteRecipe={deleteRecipe}
              recipes={recipes} />)
        }
        <footer>
          <button onClick={exampleRecipe}>Exemple de recette</button>
        </footer>
      </div>
    );
  }
}

export default Admin;