import axios from "axios";

export const API_URL = "http://localhost:8081/api";
const DISCOGRAPHIES_URL = `${API_URL}/discographies`;
const GET = "get";

async function fetch() {
  const { data } = await axios({
    method: GET,
    url: DISCOGRAPHIES_URL
  });

  return data;
}

export default { fetch };
