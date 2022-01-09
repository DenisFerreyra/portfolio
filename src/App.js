import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./pages/Footer";
import { Contact } from "./pages/Contact";

function App() {
  const [firstEntry, setFirstEntry] = useState(true);
  function handleEntry() {
    setFirstEntry(false);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          exact
          path="/"
          render={() => <Navbar handleEntry={handleEntry} />}
        />
        <Route exact path="/" render={() => <Home firstEntry={firstEntry} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Footer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
