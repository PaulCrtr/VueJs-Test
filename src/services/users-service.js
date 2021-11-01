import axios from "axios";

const RANDOM_USER_BASE_URL = "https://randomuser.me/api/";

const getUsers = async () => {
  try {
    const response = await axios.get(`${RANDOM_USER_BASE_URL}?results=25`);

    return response.data.results;
  } catch (err) {
    console.log(err);
  }
};

export default getUsers;
