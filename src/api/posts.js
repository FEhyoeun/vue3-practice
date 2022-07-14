import axios from 'axios';

const URL = 'http://localhost:4000/posts';

export function getPosts() {
  return axios.get(URL);
}

export function getPostById(id) {
  return axios.get(`${URL}/${id}`);
}

export function createPost(data) {
  return axios.post(URL, data);
}

export function updatePost(id, data) {
  return axios.put(`${URL}/${id}`, data);
}

export function deletePost(id) {
  return axios.delete(`${URL}/${id}`);
}
