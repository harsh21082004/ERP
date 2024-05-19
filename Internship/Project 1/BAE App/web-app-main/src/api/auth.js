import httpClient from './client';

export const fetchProfile = (options = {}) => {
  return httpClient.get(`/api/auth/profile/`, options);
};

export const addWalletAddress = ({ walletAddress }, options = {}) => {
  return httpClient.post(`/api/auth/wallet/`, { walletAddress }, options);
};
