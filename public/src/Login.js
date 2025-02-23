// src/Login.js
import React from 'react';
import { auth, provider } from './firebase';

function Login() {
  const loginWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        console.log("Usuário logado: ", result.user);
      })
      .catch(error => {
        console.log("Erro ao logar: ", error.message);
      });
  };

  return (
    <div className="login-container">
      <h2>Login na Davvi Store</h2>
      <button onClick={loginWithGoogle} className="login-btn">
        Entrar com Google
      </button>
    </div>
  );
}

export default Login;
