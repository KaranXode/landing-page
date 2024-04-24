import "./App.scss";
import { Footer, Navbar } from "./components/index";
import { Client, Home, OurWorks, Services } from "./container/index";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main__mobile--container">
        <Home />
        <Services />
        <OurWorks />
        <Client />
        <Footer />
      </main>
    </div>
  );
}

export default App;
