import React from 'react';

const Login = ({authenticate}) => {
  return (
    <div className='login'>
      <h2>Connecte toi pour créer de super recettes</h2>
      <button className="facebook-button" onClick={authenticate}>
        Me connecter avec facebook
      </button>
    </div>
  );
};

export default Login;