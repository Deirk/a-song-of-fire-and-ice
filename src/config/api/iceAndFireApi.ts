import axios from 'axios';

export const iceAndFireApi = axios.create( {
  baseURL: 'https://anapioficeandfire.com/api/',
} );