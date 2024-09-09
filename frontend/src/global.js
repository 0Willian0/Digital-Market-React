// config.js
export const userKey = '__Market_user';
export const baseApiUrl = 'http://localhost:3000';

// Função para exibir erros
export function showError(e) {
  const errorMsg = e?.response?.data || (typeof e === 'string' ? e : 'An unknown error occurred');
  alert(`Error: ${errorMsg}`);
  // Ou use uma biblioteca de notificação para exibir mensagens de erro no UI, como react-toastify
}

export default { baseApiUrl, showError, userKey };
