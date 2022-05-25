import axios from "axios";

let clientAxios = ({});

clientAxios = axios.create({
    baseURL: "https://storage.googleapis.com/backupdatadev/ejercicio/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    withCredentials: true,
});

export default clientAxios;
