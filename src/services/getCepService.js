import axios from 'axios';

// eslint-disable-next-line arrow-body-style, import/prefer-default-export
export const getCepService = (cep) => {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
};
