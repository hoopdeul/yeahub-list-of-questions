import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const getQuestions = async (page = 1, limit = 10, filters = {}) => {
  try {
    const responce = await axios.get(`${BASE_URL}questions/public-questions`, {
      params: {
        page,
        limit,
        ...filters
      },
      paramsSerializer: {
        indexes: null
      }
    });
    return responce.data;
  } catch (error) {
    console.log("Ошибка получения вопросов:", error);
    return { data: [], total: 0 };
  }
};
