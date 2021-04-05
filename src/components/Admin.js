import React, { Component } from 'react';
import AddRecipe from './AddRecipe';
import AdminForm from './AdminForm';
// AUTHENTICATE
import firebase from 'firebase/app';
import 'firebase/auth'
import base, { firebaseApp } from '../base';
import Login from './Login';

class Admin extends Component {
  state = {
    uid: null,
    chef: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.handleAuth({ user })
      }
    })
  }

  handleAuth = async (authData) => {
    const box = await base.fetch(this.props.pseudo, { context: this })

    if (!box.chef) {
      await base.post(`${this.props.pseudo}/chef`, {
        data: authData.user.uid
      })
    }
    this.setState({
      uid: authData.user.uid || authData.uid,
      chef: box.chef || authData.user.uid || authData.uid,
    });
  }

  logOut = async () => {
    await firebase.auth().signOut()
    this.setState({
      uid: null
    })
  }

  authenticate = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider()
    firebaseApp
      .auth()
      .signInWithPopup(fbProvider)
      .then(this.handleAuth)
  }

  render() {
    const { addRecipe, recipes, exampleRecipe, updateRecipe, deleteRecipe } = this.props
    
    const logout = <button onClick={this.logOut}>Déconnexion</button>
    // PAS CONNECTE
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate}></Login>
    }
    if (this.state.uid !== this.state.chef) {
      return (
        <div>
          <p>Tu n'est pas le chef de cette boîte !</p>
          { logout }
        </div>
      )
    }
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
          { logout }
        </footer>
      </div>
    );
  }
}

export default Admin;