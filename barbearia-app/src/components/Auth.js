import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';
import './login.css';

const Auth = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = type === 'login' ? '/auth/login' : '/auth/register';
    const payload = type === 'login'
      ? { email, password }
      : { name, email, password };

    try {
      const response = await axios.post(url, payload);
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('clientId', response.data.clientId); // Armazena o clientId

      if (type === 'login') {
        // Se for login, busque a role do usuário com base no email
        const roleResponse = await axios.get(`/auth/roles/${email}`);
        const userRole = roleResponse.data.role;

        // Redirect based on role
        if (userRole === 'admin') {
          navigate('/dashboard/admin');
        } else if (userRole === 'barbeiro') {
          navigate('/dashboard/barber');
        } else {
          navigate('/dashboard/client');
        }
      } else {
        // Mostrar alert após o registro
        alert('Registro bem-sucedido! Você será redirecionado para a página inicial.');
        setTimeout(() => {
          navigate('/');
        }, 3000); // Redireciona após 3 segundos
      }
    } catch (error) {
      console.error('Error during authentication', error);
      alert('Erro ao registrar. Tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {type === 'register' && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        )}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
        {type === 'login' && (
          <div className="register-link">
            <button onClick={() => navigate('/register')}>Create an account</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Auth;
