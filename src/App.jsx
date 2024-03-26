import Hero from "./pages/Hero";
import About from "./pages/About";
import Sponsors from "./pages/Sponsors";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import ManageButtons from "./ui/ManageButtons";
import Cart from "./ui/Cart";

export default function App() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Sponsors></Sponsors>
      <Menu></Menu>
      <Contact></Contact>
      <Footer></Footer>
      <ManageButtons />
      <Cart />
    </div>
  );
}
