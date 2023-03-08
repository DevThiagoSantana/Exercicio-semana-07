import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PageWrapper from "./components/PageWrapper";

function App() {
  return (
    <>
    <Navbar />
    <PageWrapper>
      <HomePage />
    </PageWrapper>
    <Footer />
  </>
    
  );
}

export default App;