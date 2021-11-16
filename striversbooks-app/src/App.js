import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Components/MyNavbar'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'
import BookList from './Components/BookList'
import data from "./Data/scify.json";



function App() {
  return (
    <div>
      <MyNavbar 
      brand="Strivers-Books"
      homelink="Home"
      aboutlink="About"
      browselink="browse"
      />
      <Welcome />
      <div className="d-flex">
      <BookList books={data}/>
      </div>
      <Footer />
    </div>
  )
}

export default App
