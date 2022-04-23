import React from "react";
import { useNavigate } from "react-router-dom";
import Classes from "./MyPagination.module.css";

const MyPagination = ({pages, currentPage, setPage}) => {
    const navigate = useNavigate();
    console.log(`MyPagination, currentPage: ${currentPage}`);
    return (
        <div className={Classes.page__wrapper}>{
            pages.map(pageNum => 
              <span key={pageNum} 
                className={currentPage == pageNum ? `${Classes.page} ${Classes.page__current}` : Classes.page} 
                onClick={() => {
                    setPage(pageNum);
                    navigate(`/posts/${pageNum}`);
                }}>{pageNum}</span>)
          }
        </div>     
    );
}

export default MyPagination;