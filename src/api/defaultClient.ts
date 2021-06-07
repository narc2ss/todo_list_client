import axios from 'axios';
import 'dotenv/config';

const baseURL: string = process.env.REACT_APP_BASE_URL ?? '';

console.log(baseURL);

const defaultClient = axios.create({
  baseURL,
  withCredentials: true,
});

export default defaultClient;
