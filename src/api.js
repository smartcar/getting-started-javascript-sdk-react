import axios from 'axios';

export const getVehicle = () => {
  return axios.get(`${process.env.REACT_APP_SERVER}/vehicle`)
    .then((res) => {
      return res.data;
    });
};

export const getAccessToken = (code) => {
  return axios.get(`${process.env.REACT_APP_SERVER}/callback?code=${code}`);
};
