import httpClient from "./client";

export const fetchUserTwitterCreatedPostCount = (options = {}) => {
  return httpClient.get(`/api/user-twitter/created-posts`, options);
};
