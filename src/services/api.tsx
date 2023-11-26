import axios from "axios";

export const api = axios.create({
  baseURL: "https://simiapi.azurewebsites.net/"
})