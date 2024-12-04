import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

const Login = () => {
  return (
   <div className="login">
    <div className="login-container">
      <h1>Prihlás sa</h1>
      <div className="login-fields">
          <input type="text" placeholder="Meno/E-mail" />
          <input type="password" placeholder="Heslo" />
      </div>
      <button>Pokračuj</button>
            <p className="login-login">Nemáte u nás účet? Zaregistrujte sa <Link to='/register'><span>tu</span></Link></p>


    </div>

   </div>
  );
}

export default Login;