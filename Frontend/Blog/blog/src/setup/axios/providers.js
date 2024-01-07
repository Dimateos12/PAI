import axiosAuth from "./authInstance";
import {ENDPOINTS, LOCAL_STORAGE} from "../../utils/consts";

export function login(data){
    axiosAuth.post(ENDPOINTS.login, data)
        .then((response) => {
            localStorage.setItem(LOCAL_STORAGE.accessToken, response.data.token);
            window.location.href = '/';
        })
        .catch((error) => {
            alert(error);
        })
}

export function Register(data){
    axiosAuth.post(ENDPOINTS.register, data)
        .then((response) => {
            localStorage.setItem(LOCAL_STORAGE.accessToken, response.data.token);
            window.location.href = '/';
        })
        .catch((error) => {
            alert(error);
        })
}

export function GetSection() {
    return axiosAuth.get(ENDPOINTS.section)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching section:', error);
            throw error; 
        });
}

export function GetFeaturedPost() {
    return axiosAuth.get(ENDPOINTS.GetFeaturedPost)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching section:', error);
            throw error;
        });
}
    export function GetAllPosts() {
        return axiosAuth.get(ENDPOINTS.GetPosts)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching section:', error);
                throw error;
            });
    }

    export function GetPostsById(id) {
        return axiosAuth.get(ENDPOINTS.GetPostsById+id)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching section:', error);
                throw error;
            });

    }

    export function GetCommentsByPostId(id) {
        return axiosAuth.get(ENDPOINTS.GetCommentByPostId+id)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching section:', error);
                throw error;
            });

    }


    export function GetPostById(id) {
        return axiosAuth.get(ENDPOINTS.GetPostById+id)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching section:', error);
                throw error;
            });
        }