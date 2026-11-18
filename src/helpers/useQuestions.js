import { useEffect, useState } from "react";
import { getQuestions } from "../api/apiQuestions";
import { buildQuestionParams } from "../helpers/buildQuestionParams";
import { getTotalPages, getNextPage, getPrevPage, clampPage } from "../helpers/pagination";

export const PAGE_SIZE = 10;

export const useQuestions = (filters, debounceSearch) => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { spec, skills, complexity, rate } = filters;

  const filtersKey = JSON.stringify([spec, skills, complexity, rate, debounceSearch]);
  const [prevFiltersKey, setPrevFiltersKey] = useState(null);
  if (filtersKey !== prevFiltersKey) {
    setPrevFiltersKey(filtersKey);
    setCurrentPage(1);
  }

  useEffect(() => {
    let isActual = true;

    const fetchQuestions = async () => {
      setIsLoading(true);
      try {
        const data = await getQuestions(
          currentPage,
          PAGE_SIZE,
          buildQuestionParams({ spec, skills, complexity, rate }, debounceSearch)
        );
        if (!isActual) return;
        setQuestions(data.data);
        setTotalPages(getTotalPages(data.total, PAGE_SIZE));
      } catch (error) {
        if (isActual) {
          console.error(error);
          setQuestions([]);
          setTotalPages(1);
        }
      } finally {
        if (isActual) setIsLoading(false);
      }
    };

    fetchQuestions();
    return () => {
      isActual = false;
    };
  }, [currentPage, spec, skills, complexity, rate, debounceSearch]);

  const goToNextPage = () => setCurrentPage((prev) => getNextPage(prev, totalPages));

  const goToPrevPage = () => setCurrentPage((prev) => getPrevPage(prev));

  const goToPage = (page) => setCurrentPage(clampPage(page, totalPages));

  return {
    questions,
    isLoading,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
    goToPage
  };
};
