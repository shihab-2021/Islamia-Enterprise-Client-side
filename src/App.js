import Contact from "./Components/Home/Contact/Contact";
import HeroSection from "./Components/Home/HeroSection/HeroSection";
import Product from "./Components/Home/Product/Product";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import "./App.css"


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Product></Product>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
