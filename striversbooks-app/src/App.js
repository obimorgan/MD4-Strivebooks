/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/MyNavbar";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import BookList from "./Components/BookList";
import data from "./Data/scify.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/FormSolution/Registration";
import FormDetailsPage from "./Components/FormSolution/FormDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Welcome />
                <div className="d-flex">
                  <BookList books={data} />
                </div>
              </>
            }
          />
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/formdetails" element={<FormDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
