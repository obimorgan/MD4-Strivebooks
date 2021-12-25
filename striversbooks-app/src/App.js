import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Components/MyNavbar'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'
import BookList from './Components/BookList'

function App() {
  return (
    <div>
      <MyNavbar/>
      <Welcome />
      <div className="d-flex">
      <BookList />
      </div>
      <Footer />
    </div>
  )
}

export default App
