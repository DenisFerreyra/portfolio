import { Home } from "./pages/Home";
import "./App.css";
import { Navbar } from "./pages/Navbar";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
