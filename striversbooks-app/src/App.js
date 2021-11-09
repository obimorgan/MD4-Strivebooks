import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Components/MyNavbar'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
      <MyNavbar brand="Strivers-Books" />
      <Welcome />
      <Footer />
    </div>
  )
}

export default App
