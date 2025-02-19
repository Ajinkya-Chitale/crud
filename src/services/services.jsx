import axios from "axios";

// Axios Default URL Configuration
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// Get - All Posts
export const getPosts = () => {
    return api.get('/posts');
}

// Post - Add Post
export const addPost = (params) => {
    return api.post('/posts', {
        params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}

// Delete Post
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}

// Put - Update Post
export const updatePost = (id, params) => {
    return api.put(`/posts/${parseInt(id)}`, {
        params,
        headers: {
            'Content-Type': "application/json; charset=UTF-8"
        }
    })
}