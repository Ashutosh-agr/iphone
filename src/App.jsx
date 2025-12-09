import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Highlight from "./components/Highlight.jsx";
import Model from "./components/Model.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
      <main className="bg-black">
          <Navbar/>
          <Hero/>
          <Highlight/>
          <Model/>
          <Features/>
          <HowItWorks/>
          <Footer/>
      </main>
  )
}

export default App
