import axios from 'api/defaultClient';
import { ILoginForm, ISignupForm } from 'modules/user/types';

export const postUser = async (signupForm: ISignupForm) => {
  return await axios.post('/register', signupForm);
};

export const login = async (loginForm: ILoginForm) => {
  return await axios.post('/auth/login', loginForm, { withCredentials: true });
};

export const getUserProfile = async () => {
  return await axios.get('/profile');
};

export const logout = () => {
  return axios.post('/logout');
};
