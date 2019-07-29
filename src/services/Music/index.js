import axios from "axios";

export const API_URL = "http://localhost:8081/api";
const MUSIC_URL = `${API_URL}/music`;
const GET = "get";

async function fetchMusic() {
  const { data } = await axios({
    method: GET,
    url: MUSIC_URL
  });

  return data;
}

export default { fetchMusic };
