import axios from 'axios';

// Função de sucesso
const success = (res) => res;

// Função de erro
const error = (err) => {
  if (err.response && err.response.status === 401) {
    // Redireciona para a página inicial em caso de erro 401
    window.location = '/';
  } else {
    // Rejeita a promessa para que o erro possa ser tratado pelos chamadores
    return Promise.reject(err);
  }
};

// Configura os interceptores de resposta
axios.interceptors.response.use(success, error);

export default axios;