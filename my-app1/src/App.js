import "./App.css"
// import Header from './components/Header/Header'
import { useContext } from "react"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Section1 from "./pages/Section1/Section1"
import Section2 from "./pages/section2/Section2"
import { Routes, Route } from "react-router-dom"
import AppContext from "./context/AppContext"

const App = () => {

  const context = useContext(AppContext)


  return (
    <div className={context.theme + " app"}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/section1" element={<Section1 />} />
        <Route path="/section2" element={<Section2 />} />
      </Routes>

    </div>
  )
}

export default App