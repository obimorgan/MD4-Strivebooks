import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Components/MyNavbar'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'
import BookList from './Components/BookList'
import WarningSign from './Components/WarningSign'
import MyBadge from './Components/MyBadge'
// import SingleBook from './Components/SingleBook'



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
      <WarningSign
        content="Warning"
      />
      <MyBadge content="BADGE!" colour="pink" />
      {/* <SingleBook /> */}
      <BookList />

      <Footer />
    </div>
  )
}

export default App