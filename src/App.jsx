import './styles/App.css'
import Footer from './components/Footer'
import Home from './components/home'
import MyProyects from './components/myproyects'
import Navbar from './components/navbar'
import About from './components/aboutme'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <MyProyects/>
      <Footer/>
    </>
  )
}

export default App
