import { BASE_URL } from './constants';

export default class DataServices {
    static async getCharacters(page = 1) {
        return fetch(`${BASE_URL}/character/?page=${page}`)
            .then(response => response.json())
            .then(data => data); 
    }
  
    static async getCharacterById(id = 1) {
        return fetch(`${BASE_URL}/character/${id}`)
            .then(response => response.json())
            .then(data => data);
    }

    static async getEpisodesById(id = 1) {
        return fetch(`${BASE_URL}/episode/${id}`)
            .then(response => response.json())
            .then(data => data);
    }

    static async getAllEpisodes() {
        return fetch(`${BASE_URL}/episode`)
            .then(response => response.json())
            .then(data => data);
    }
}