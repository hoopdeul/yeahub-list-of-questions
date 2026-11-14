import axios from "axios";

const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_API_URL;

export const getQuestions = async (page = 1, limit = 10) => {
  try {
    const responce = await axios.get(`${BASE_URL}`, {
      params: {
        page,
        limit
      }
    });
    return responce.data;
  } catch (error) {
    console.log("Ошибка получения вопросов:", error);
    return [];
  }
};
