import "./App.css";
import Header from "./components/Header";
import History from "./components/History";
import Climb from "./components/Climb";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <History />
      <Climb />
      <Footer />
    </div>
  );
}

export default App;
