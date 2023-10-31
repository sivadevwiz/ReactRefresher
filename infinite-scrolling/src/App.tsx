import { useState, useRef, useCallback } from "react";
import "./App.css";

import useBooksearch from "./useBookSearch";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const observer = useRef();
  const lastBookElementRef = useCallback(node => {
  //   if (loading) return 
  //   if(observer.current) observer.current.disconnect()

  // });

  const handleSearch = (e: any) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  const { books, hasMore, loading, error } = useBooksearch(query, pageNumber);
  // console.log("hasmore.........", hasMore);

  return (
    <>
      <input type="text" value={query} onChange={handleSearch} />
      {books.map((book, index) => (
        if(books.length === index + 1) {
          return <div ref={lastBookElementRef} key={book}>{book}</div>
        } else {
          return <div key={book}>{book}</div>
        }
        
      ))}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}

export default App;
