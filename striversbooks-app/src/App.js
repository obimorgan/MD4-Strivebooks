import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Components/MyNavbar'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'
import BookList from './Components/BookList'
import MyBadge from './Components/MyBadge'
import MyWarning from './Components/MyWarning'



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
      <MyWarning />
      <BookList />
      
      <Footer />
    </div>
  )
}

export default App
