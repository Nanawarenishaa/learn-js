import { useState, useEffect } from "react";
import { BookData } from "./Data";

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("");
  const [rating, setRating] = useState(5);
  const [price, setPrice] = useState(1000);
  const [filteredData, setFilteredData] = useState(BookData);
  const [books, setBooks] = useState(BookData);

  useEffect(() => {
    filterBooks();
  }, [search, genre, sort, rating, price, books]);

  const filterBooks = () => {
    const data = books.filter(book => {
      const matchesSearch = search === "" || book.title.toLowerCase().includes(search.toLowerCase());
      const priceRange = price === "" || book.price <= parseFloat(price);
      const genreSearch = genre === "" || book.genre.toLowerCase().includes(genre.toLowerCase());
      const ratingRange = book.rating <= parseFloat(rating);
      return matchesSearch && priceRange && genreSearch && ratingRange;
    });

    const sortedData = data.sort((a, b) => {
      if (sort === "Sort Ascending") {
        return a.year - b.year;
      }
      if (sort === "Sort Descending") {
        return b.year - a.year;
      }
      return 0;
    });

    setFilteredData(sortedData);
  };

  const addNew = () => {
    const newBook = {
      title: "New Book",
      author: "New Author",
      year: 2024,
      genre: "New Genre",
      price: 20,
      rating: 4,
      pages: 300
    };
    setBooks([...books, newBook]);
  };

  const removeBook = (title) => {
    const index = books.findIndex(book => book.title === title);
    if (index !== -1) {
      const updatedBooks = [...books];
      updatedBooks.splice(index, 1);
      setBooks(updatedBooks);
    }
  };

  const bookTitles = books.map(book => book.title);

  return (
    <div className="w-full min-h-screen flex bg-gray-900 text-pink-200">
      <div className="w-[34%] sm:w-[25%] min-h-screen bg-gray-800 p-4">
        <h1 className="text-2xl font-bold mb-4">Book List</h1>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Filters</h2>
          <div className="mt-4 flex flex-col gap-2">
            <label className="block mb-2">Price Range</label>
            <label htmlFor="">{price}</label>
            <input
              type="range"
              min={0}
              max={1000}
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              className="block mb-4 p-2 w-full bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Genre</label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Genre"
              className="block mb-4 p-2 w-full bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Rating</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(parseFloat(e.target.value))}
              placeholder="Rating"
              className="block mb-4 p-2 w-full bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label>Sort by year:</label>
            <button
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded"
              onClick={() => setSort("Sort Ascending")}
            >
              Sort Ascending
            </button>
            <button
              onClick={() => setSort("Sort Descending")}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded"
            >
              Sort Descending
            </button>
            <button
              onClick={addNew}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded"
            >
              Add new
            </button>
            <span>Total Books: {books.length} </span>
            <h3 className="text-lg font-bold mt-4">All Book Titles:</h3>
            <ul>
              {bookTitles.map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container p-4 flex-grow">
        <div className="mb-4 flex gap-2">
          <input
            type="search"
            placeholder="Search by title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 w-full bg-gray-700 border border-gray-600 rounded"
          />
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded">
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
          {filteredData.map((book, index) => (
            <div
            className="border border-gray-700 rounded-md p-4 bg-gray-800 hover:bg-gray-700 transition duration-300"
            key={index}
          >
              <h2 className="text-xl font-bold">Title: {book.title}</h2>
              <p className="text-sm mt-2">Author: {book.author}</p>
              <p className="text-sm">Year: {book.year}</p>
              <p className="text-sm">Genre: {book.genre}</p>
              <p className="text-sm">Price: ${book.price.toFixed(2)}</p>
              <p className="text-sm">Rating: {book.rating} / 5</p>
              <p className="text-sm">Pages: {book.pages}</p>
              <div className="flex gap-4">

              <button 
                className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded"
                onClick={() => removeBook(book.title)}
              >
                Remove
              </button>
              <button className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded">
                Buy Now
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
