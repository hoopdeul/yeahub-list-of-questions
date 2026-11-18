import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const getList = async (endpoint) => {
  try {
    const res = await axios.get(`${BASE_URL}${endpoint}`, {
      params: { page: 1, limit: 100 }
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return { data: [] };
  }
};
