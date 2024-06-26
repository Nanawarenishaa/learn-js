import { useState } from "react";
import { BookData } from "./Data";

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [ Price, setPrice] = useState(1000);

  const filteredData = BookData.filter(book => {
    const matchesSearch = search === "" || book.title.toLowerCase().includes(search.toLowerCase());
    const PriceRange = Price === "" || book.price <= Price ;
    return matchesSearch && PriceRange;
  });

  return (
    <div className="w-full min-h-screen flex bg-gray-900 text-white">
      <div className="w-[30%] h-screen bg-gray-800 p-4">
        <h1 className="text-2xl font-bold mb-4">Book List</h1>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Filters</h2>
          <div className="mt-4 flex flex-col gap-2">
            <span className="block mb-2">Price Range</span>
            <label htmlFor="">{Price}</label>
            <input
              type="range"
              min={0}
              max={1000}
              placeholder="Max"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              className="block mb-4 p-2 w-full bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <span className="block mb-2">Genre</span>
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              className="block mb-4 p-2 w-full bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <span className="block mb-2"> Rating</span>
            <input
              type="number"
              name="Rating"
              placeholder="Rating"
              className="block mb-4 p-2 w-full bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <button className="block w-full py-2 bg-cyan-500 hover:bg-cyan-500 rounded">Apply Filters</button>
        </div>
      </div>
      <div className="container p-4 flex-grow">
        <div className="mb-4 px-20 flex gap-2">
          <input
            type="search"
            placeholder="Search by title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 w-full bg-gray-700 border border-gray-600 rounded"
          />
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-500 text-white font-bold rounded">
            Search
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8 p-8">
          {filteredData.map((book, index) => (
            <div
              className="border border-gray-700 rounded-md p-4 bg-indigo-800 hover:bg-indigo-600 transition duration-300"
              key={index}
            >
              <h2 className="text-xl font-bold">Title: {book.title}</h2>
              <p className="text-sm mt-2">Author: {book.author}</p>
              <p className="text-sm">Year: {book.year}</p>
              <p className="text-sm">Genre: {book.genre}</p>
              <p className="text-sm">Price: ${book.price.toFixed(2)}</p>
              <p className="text-sm">Rating: {book.rating} / 5</p>
              <p className="text-sm">Pages: {book.pages}</p>
              <button className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
