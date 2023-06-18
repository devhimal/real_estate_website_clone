import { Navbar, Hero, Footer, Companies, Property, Value, Contactus, Getstarted } from "./components/export";
import "./style/module.navbar.css";


function App() {
  return (
    <div className="container">
      <div>
          <Navbar />
          <Hero />
      </div>
          <Companies />
          <Property />
          <Value />
          <Contactus />
          <Getstarted />
          <Footer />
    </div>
  );
}

export default App;
