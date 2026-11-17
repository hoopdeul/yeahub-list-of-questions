import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const getSpecializations = async () => {
  try {
    const responce = await axios.get(`${BASE_URL}specializations`, {
      params: {
        page: 1,
        limit: 1000
      }
    });
    return responce.data;
  } catch (error) {
    console.log("Ошибка получения специализаций:", error);
  }
};
