import axios from "axios";

export const API_URL = "http://localhost:8081/api";
const SONGS_URL = `${API_URL}/songs`;
const GET = "get";

async function fetchSongs() {
  const { data } = await axios({
    method: GET,
    url: SONGS_URL
  });

  return data;
}

export default { fetchSongs };
