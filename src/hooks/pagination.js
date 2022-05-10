import { useState } from "react";

export const usePagination = (perPageReords, totalPageRecords) => {
  const totalPages = Math.ceil(totalPageRecords / perPageReords);
  const [startPageIndex, setStatrPageIndex] = useState(0);
  const [endPageIndex, setEndPageIndex] = useState(perPageReords - 1);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  //function
  const displayPage = (pageNo) => {
    setCurrentPageIndex(pageNo);
    let end_page_index = perPageReords * pageNo - 1;
    let start_page_index = perPageReords * pageNo - perPageReords;
    setStatrPageIndex(start_page_index);

    if (end_page_index > totalPageRecords) {
      setEndPageIndex(totalPageRecords - 1);
    } else {
      setEndPageIndex(end_page_index);
    }
  };

  return [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ];
};
