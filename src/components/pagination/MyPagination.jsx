import React from "react";
import Classes from "./MyPagination.module.css";

const MyPagination = ({pages, currentPage, setPage}) => {
    return (
        <div className={Classes.page__wrapper}>{
            pages.map(pageNum => 
              <span key={pageNum} className={currentPage === pageNum ? `${Classes.page} ${Classes.page__current}` : Classes.page} onClick={() => setPage(pageNum)}>{pageNum}</span>)
          }
        </div>     
    );
}

export default MyPagination;