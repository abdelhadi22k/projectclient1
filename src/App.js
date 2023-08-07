import NaveBar from "./components/NaveBar";
import Footer from "./components/utilt/Footer";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import HomePage from "./page/HomePage";
import ProtfoloPage from "./page/ProtfoloPage";
import ServicesPage from "./page/ServicesPage";
import Tetimomonals from "./page/Tetimomonals";
import Workflpwpage from "./page/Workflpwpage";
import "./styles/App.css";

function App() {
  return (
    <div>
       <NaveBar /> 
       <HomePage /> 
        <ServicesPage />
      <AboutUs />
       <Workflpwpage />
      <Tetimomonals /> 
      <ProtfoloPage /> 
      <ContactUs /> 
       <Footer />
    </div>
  );
}

export default App;
