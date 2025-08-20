import axios from "axios";

const API_URL = "http://localhost:8080/api/vocabulary";

export const getVocabulary = () => axios.get(API_URL);
export const addVocabulary = (data) => axios.post(API_URL, data);
export const updateVocabulary = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteVocabulary = (id) => axios.delete(`${API_URL}/${id}`);
