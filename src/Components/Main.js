import { useState } from "react";
import Card from "./Card";
import axios from "axios";
import "./style.css";
import { MdSearch } from "react-icons/md";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <MdSearch className="search-icons" size="2.3em" />
            <input
              id="keywords"
              type="search"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
              spellCheck="false"
            />
          </div>
          <div className="image">
            <img className="image-cartoon" src="./images/bg2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="wrap-container">
        <div className="container">{<Card book={bookData} />}</div>
      </div>
    </>
  );
};
export default Main;
