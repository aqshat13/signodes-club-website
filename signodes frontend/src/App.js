import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Evnt } from "./components/Event";
import { CurrEvent } from "./components/CurEvent";
import { Regis } from "./components/register";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Evnt />
      <CurrEvent />
      <Regis />
      <Footer />
    </div>
  );
}

export default App;
