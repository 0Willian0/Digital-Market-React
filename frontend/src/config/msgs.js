import { toast } from 'react-toastify';

const notifySuccess = (msg) => {
  toast.success(msg || 'Operação realizada com sucesso');
};

const notifyError = (msg) => {
  toast.error(msg || 'Oops... Erro inesperado');
};

export { notifySuccess, notifyError };