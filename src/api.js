import axios from "axios";
import socketIOClient from 'socket.io-client';

let host = "https://laser-tag-api.herokuapp.com";

const api  = axios.create({
  baseURL: host,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }
});

export const socket = socketIOClient(host);

export default api;