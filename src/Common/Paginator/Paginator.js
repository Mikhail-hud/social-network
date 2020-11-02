import React from "react";
import {useState} from 'react';
import s from './Paginator.module.css'

let Paginator = ({totalItemsCount,pageSize, onPageChanged, currentPage, portionSize = 5}) => {
  
  
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
      <section className={s.pagination}>
        <span onClick={portionNumber > 1? ()=> setPortionNumber(portionNumber - 1): null} >&laquo;</span> 
        {pages
        .filter(p => p >= leftPortionPageNumber &&  p <= rightPortionPageNumber)
        .map((p, index) => {
          return (
            <span onClick={(e) => {onPageChanged(p)}}  key={index} className={currentPage === p ? s.active : ""}>{p}</span>
          );
        })}
        <span onClick={portionCount > portionNumber? ()=> setPortionNumber(portionNumber + 1): null} >&raquo;</span>
      </section>
  );
};

export default Paginator;
