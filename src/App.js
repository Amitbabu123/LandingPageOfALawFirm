import './App.css';
import AreaOfPractices from './components/AreaOfPractices/AreaOfPractices';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Clients from './components/Clients/Clients';
import HeroSection from './components/HeroSection/HeroSection';
import Introduction from './components/Introductions/Introduction';
import Navbar from './components/Navbar/Navbar';
import Team from './components/Team/Team';
import Faq from './components/Faq/Faq';
import Newsletters from './components/Newsletters/Newsletters';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <Introduction/>
     <ChooseUs/>
     <AreaOfPractices/>
     <Clients/>
     <Team/>
					<Faq />
					<Newsletters />
          <Footer/>
    </div>
  );
}

export default App;
