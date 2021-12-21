import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./pagination.scss";
const Index = ({ datoFiltered }) => {
 
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(20);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    getData();
  }, [offset]);

  useEffect(() => {
    getData();
    setPageCount(Math.ceil(data.length / perPage));
  }, [datoFiltered]);
  const getData = () => {
    const slice = datoFiltered.slice(offset, offset + perPage);
    const postData = slice.map((pd) => (
      <div key={pd.id} className="card">
        <div className="cardstyle">
          <p className="item">{pd.title}</p>
          <img className="item" src={pd.thumbnailUrl} width="200px" />
        </div>
      </div>
    ));
    setData(postData);
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  return (
    <div className="containerCard">
      {data}
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Index;
