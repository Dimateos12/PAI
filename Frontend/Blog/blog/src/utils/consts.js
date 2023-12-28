const url = window.location;

export const API_URL =
    url.port !== "" ? `https://${url.hostname}:7009/api/` : `${url.origin}/api/`;

export const ENDPOINTS = {
   login: "Authentication/Login", 
   register: "Authentication/Register",
   section: "Section",
};

export const PATHS = {
   
};

export const LOCAL_STORAGE = {
    accessToken: "token",
};
