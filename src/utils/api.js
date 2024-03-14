import axios from "axios";

const BASE_URL= "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODZkNjFjYzBkNDY3NjdiODQwNDQxOTVkYTFhYjEwOSIsInN1YiI6IjY1ZWQ3YjU3OTFmMGVhMDE4NjhiZDRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._h7MlQARNYfOfTttRm20m4F8sCtFF_Ud8UScDxDia6c";
const headers = {
    Authorization : "Bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params) =>{
    try {
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        console.log('data',data);
        return data;
    } catch (error) {
        console.error('error: ',error.response)
        return error
    }
}