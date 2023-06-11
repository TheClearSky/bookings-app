import React from 'react';
import "./Pages.css";

export default function Pages({currentPageNumber,setCurrentPageNumber,totalItems,itemsInOnePage,siblings=1}) {
    let firstPage=1;
    let minPageToDisplay=Math.max(currentPageNumber-siblings,firstPage);
    let lastPage=Math.ceil(totalItems/itemsInOnePage);
    let maxPageToDisplay=Math.min(currentPageNumber+siblings,lastPage);
    let displayPages=[];
    for(let page=minPageToDisplay;page<=maxPageToDisplay;++page)
    {
        displayPages.push(<div key={page} className={"page" +((currentPageNumber==page)?" currentpage":"")} onClick={()=>setCurrentPageNumber(page)}>{page}</div>)
    }
  return (
    <div className="pages">
        {(currentPageNumber-siblings>firstPage)&&
        <div className="page" onClick={()=>setCurrentPageNumber(1)}>1</div>}
        {(currentPageNumber-siblings>firstPage+1)&&
        <div className="pageellipsis">...</div>}
        {displayPages}
        {(currentPageNumber+siblings<lastPage-1)&&
        <div className="pageellipsis">...</div>}
        {(currentPageNumber+siblings<lastPage)&&
        <div className="page" onClick={()=>setCurrentPageNumber(lastPage)}>{lastPage}</div>}
    </div>
  )
}
