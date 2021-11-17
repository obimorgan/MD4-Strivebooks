/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/MyNavbar";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import BookList from "./Components/BookList";
import data from "./Data/scify.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About"
import BookDetails from "./Components/BookDetails/BookDetails"
import NotFound from "./Components/Notfound"


function App() {
  return (
    <BrowserRouter>
      <MyNavbar
        brand="Strivers-Books"
        homelink="Home"
        aboutlink="About"
        browselink="Book Details"
      />
      <Routes>
        <Route
          path="/"
          element={
            ((
              <div>
                <Welcome />
              </div>
            ),
            (
              <div className="d-flex">
                <BookList books={data} />
              </div>
            ))
          }
        />
        <Route path="/about" element={<About/>} />
        <Route path="/book-details" element={<BookDetails/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
