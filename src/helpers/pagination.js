export const getTotalPages = (total, pageSize) => Math.max(1, Math.ceil(total / pageSize));

export const getNextPage = (currentPage, totalPages) =>
  currentPage < totalPages ? currentPage + 1 : currentPage;

export const getPrevPage = (currentPage) => (currentPage > 1 ? currentPage - 1 : currentPage);

export const clampPage = (page, totalPages) => Math.min(Math.max(1, page), totalPages);
