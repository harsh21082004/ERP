import queryString from 'query-string';

import httpClient from './client';

export const fetchUserInvitees = (options = {}) => {
  return httpClient.get(`/api/user/invitees/`, options);
};
export const fetchLeaderboard = ({ page = 1 }, options = {}) => {
  const query = queryString.stringify({ page });

  return httpClient.get(`/api/user/leaderboard/?${query}`, options);
};

export const fetchPublicLeaderboard = ({ page = 1 }, options = {}) => {
  const query = queryString.stringify({ page });

  return httpClient.get(`/api/user/public/leaderboard/?${query}`, options);
};
