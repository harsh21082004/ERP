import httpClient from "./client";

export const fetchBaeData = (type = "supporters", options = {}) => {
  return httpClient.get(`/api/bae-data?type=${type}`, options);
};
