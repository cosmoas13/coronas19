import axios from "axios";

// Set config defaults when creating the instance
export const API = axios.create({
  baseURL: "https://covid19.mathdro.id/api"
});

export const setAuthToken = token => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
