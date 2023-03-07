import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    <Navbar />
    <main id="pageContainer">
      <HomePage />
    </main>
    <Footer />
  </>
    
  );
}

export default App;