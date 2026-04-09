import "./style.css";
import { useState } from "react";
import { books as dataBooks } from "../../utils/books";

import BookCard from "../../components/BookCard";
import SectionTitle from "../../components/SectionTitle";
import AddBook from "../../components/AddBook";

export default function Books(){

  // ✅ STATE UTAMA
  const [books, setBooks] = useState(dataBooks);
  const [search,setSearch] = useState("");
  const [price,setPrice] = useState("all");

  // ✅ FILTER
  const filteredBooks = books.filter(book=>{
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase());

    const matchPrice =
      price==="all" ||
      (price==="low" && book.price<100000) ||
      (price==="high" && book.price>=100000);

    return matchSearch && matchPrice;
  });

  return(
    <div className="container">

      <SectionTitle
        title="All Books"
        subtitle="Find your favorite books"
      />

      {/* ✅ ADD BOOK BUTTON */}
      <AddBook books={books} setBooks={setBooks} />

      <input
        className="search-box"
        placeholder="Search book..."
        onChange={(e)=>setSearch(e.target.value)}
      />

      <select
        className="filter"
        onChange={(e)=>setPrice(e.target.value)}
      >
        <option value="all">All Price</option>
        <option value="low">Below 100k</option>
        <option value="high">Above 100k</option>
      </select>

      {filteredBooks.length===0 ? (
        <div className="empty">
          <h3>No Books Found 😢</h3>
        </div>
      ):(

        <div className="grid">
          {filteredBooks.map(book=>(
            <BookCard key={book.id} book={book}/>
          ))}
        </div>

      )}

    </div>
  )
}