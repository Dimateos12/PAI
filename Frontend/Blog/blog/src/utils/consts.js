const url = window.location;

export const API_URL =
    url.port !== "" ? `https://${url.hostname}:7009/api/` : `${url.origin}/api/`;

export const ENDPOINTS = {
   login: "Authentication/Login", 
   register: "Authentication/Register",
   section: "Section",
   GetFeaturedPost: "Post/featured",
   GetPosts: "Post",
   GetPostsById: "Post/",
   GetPostById: "Post/get/",
   GetPostToAccept: "Post/toAccept",
   GetCommentByPostId: "Comment/getListByPost/",
   GetCommentToAccept: "Comment/getCommentToAccept",
   GetComment: "Comment",
   AddComment: "Comment",
   EditComment: "Comment/",
   EditPost: "Post/",
   PayU: "Admin/PayU",
   GetPostByUserId: "Post/getByUser/",
   GetCommentByUserId: "Comment/getByUserId/",
   AddPost: "Post"
};

export const PATHS = {
   
};

export const LOCAL_STORAGE = {
    accessToken: "token",
};
