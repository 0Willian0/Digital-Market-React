import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseApiUrl, showError, userKey } from '../../global';
import { notifySuccess } from '../../config/msgs';
import { setUser } from '../../config/store'; // Importa a ação setUser
import '../../styles/Auth.css';

const Auth = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signin = async () => {
    try {
      const res = await axios.post(`${baseApiUrl}/signin`, userData);
      dispatch(setUser(res.data)); // Armazenando o usuário no Redux
      localStorage.setItem(userKey, JSON.stringify(res.data));
      navigate('/');
    } catch (error) {
      showError(error)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const signup = async () => {
    try {
      await axios.post(`${baseApiUrl}/signup`, userData);
      notifySuccess('Cadastro realizado com sucesso!');
      setUserData({});
      setShowSignup(false);
    } catch (error) {
      showError(error.response.data.message || 'Erro ao cadastrar');
    }
  };

  return (
    <div className="auth-content">
      <div className="auth-modal">
        <img src={require('../../assets/logo.png')} width="200" alt="Logo" />
        <hr />
        <div className="auth-title">{showSignup ? 'Cadastro' : 'Login'}</div>

        {showSignup && (
          <input
            name="name"
            value={userData.name || ''}
            onChange={handleChange}
            type="text"
            placeholder="Nome"
          />
        )}
        <input
          name="email"
          value={userData.email || ''}
          onChange={handleChange}
          type="text"
          placeholder="E-mail"
        />
        <input
          name="password"
          value={userData.password || ''}
          onChange={handleChange}
          type="password"
          placeholder="Senha"
        />
        {showSignup && (
          <input
            name="confirmPassword"
            value={userData.confirmPassword || ''}
            onChange={handleChange}
            type="password"
            placeholder="Confirme a Senha"
          />
        )}

        <button onClick={showSignup ? signup : signin}>
          {showSignup ? 'Registrar' : 'Entrar'}
        </button>

        <a href="/" onClick={(e) => {
          e.preventDefault();
          setShowSignup(!showSignup);
        }}>
          {showSignup
            ? 'Já possui cadastro? Acesse o Login!'
            : 'Não possui cadastro? Registre-se aqui!'}
        </a>
      </div>
    </div>
  );
};

export default Auth;
