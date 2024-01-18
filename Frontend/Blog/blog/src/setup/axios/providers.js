import axiosAuth from "./authInstance";
import {ENDPOINTS, LOCAL_STORAGE} from "../../utils/consts";
import axios from "axios";

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

    export function GetAllComents() {
        return axiosAuth.get(ENDPOINTS.GetComment)
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

    export function AddComment(data){
        return axiosAuth.post(ENDPOINTS.AddComment,data)
        .then(response=> response.data)
        .catch(error => {
            console.error("error post comment", error);
            throw error;
        });
    }

    export function GetCommentToAccept() {
        return axiosAuth.get(ENDPOINTS.GetCommentToAccept)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching section:', error);
                throw error;
            });
    }

    export function GetPostToAccept() {
        return axiosAuth.get(ENDPOINTS.GetPostToAccept)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching section:', error);
                throw error;
            });
    }
