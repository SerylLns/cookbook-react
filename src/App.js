import React, { Component } from 'react'
// CSS
import './App.css'
import Card from './components/Card';
import Hearder from './components/Hearder'
import recettes from "./recettes"
// FIREBASE
import base from "./base"
import Admin from './components/Admin';
class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {},
  };

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: "recettes",
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addRecipe = (recipe) => {
    const recettes = { ...this.state.recettes };
    recettes[`recette-${Date.now()}`] = recipe;
    this.setState({ recettes });
  };

  updateRecipe = (key, newrecipe) => {
    const recettes = { ...this.state.recettes };
    recettes[key] = newrecipe;
    this.setState({ recettes });
  };

  deleteRecipe = (key) => {
    console.log(key);
    const recettes = { ...this.state.recettes };
    recettes[key] = null;
    this.setState({ recettes });
  }

  exampleRecipe = (e) => {
    this.setState({ recettes });
  };

  render() {
    const cards = Object.keys(this.state.recettes).map((key) => {
      return <Card key={key} details={this.state.recettes[key]}></Card>;
    });
    return (
      <div className="box">
        <Hearder pseudo={this.state.pseudo} />
        <div className="cards">{cards}</div>
        <Admin
          pseudo={this.state.pseudo}
          recipes={this.state.recettes}
          exampleRecipe={this.exampleRecipe}
          updateRecipe={this.updateRecipe}
          deleteRecipe ={this.deleteRecipe}
          addRecipe={this.addRecipe} />
      </div>
    );
  }
}

export default App
