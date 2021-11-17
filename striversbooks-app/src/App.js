/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/MyNavbar";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import BookList from "./Components/BookList";
import data from "./Data/scify.json";

import About from "./Components/About/About";
import BookDetails from "./Components/BookDetails/BookDetails";
import NotFound from "./Components/Notfound";

function App() {
  return (
    <>
      <MyNavbar
        brand="Strivers-Books"
        homelink="Home"
        aboutlink="About"
        bookdetailslink="Book Details"
      />
      <Welcome/>
      <BookList books={data}/>
      <Footer />
    </>
  );
}

export default App;
