import axios from "axios";

export const api = axios.create({
  baseURL: "https://barberiaapi.azurewebsites.net/"
})