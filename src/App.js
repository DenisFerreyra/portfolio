import "./App.css";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./pages/Footer";
import { Contact } from "./pages/Contact";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Navbar} />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Footer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
