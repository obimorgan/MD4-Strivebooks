import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Components/MyNavbar'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'
import Tapestry from './Components/Tapestry'
import WarningSign from './Components/WarningSign'



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
      text="Warning"
      />
      <Tapestry />
      
      <Footer />
    </div>
  )
}

export default App
