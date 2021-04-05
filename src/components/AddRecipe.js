import React, { Component } from 'react';

class AddRecipe extends Component {
  state = {
    nom: "",
    image: "",
    ingredients: "",
    instructions: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const recipe = { ...this.state }
    this.props.addRecipe(recipe)
    // RESET
    Object.keys(recipe)
      .forEach((key) => { recipe[key] = "" })
    this.setState({ ...recipe })
  }

  render() {
    return (
      <div className="card">
        <form
          className="admin-form ajouter-recette"
          onSubmit={this.handleSubmit}
        >
          <input
            name="nom"
            value={this.state.name}
            type="text"
            placeholder="Nom de la recette"
            onChange={this.handleChange}
          />
          <input
            name="image"
            value={this.state.image}
            type="text"
            placeholder="url de l'image"
            onChange={this.handleChange}
          />
          <textarea
            name="ingredients"
            rows="3"
            value={this.state.ingredients}
            placeholder="Liste des ingredients"
            onChange={this.handleChange}
          ></textarea>
          <textarea
            name="instructions"
            rows="6"
            value={this.state.instructions}
            placeholder="Instructions"
            onChange={this.handleChange}
          ></textarea>
          <button type="submit">Ajouter la recette</button>
        </form>
      </div>
    );
  }
}

export default AddRecipe;  