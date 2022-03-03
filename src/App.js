
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Features1 from './components/Features/Features1';
import Card2 from './components/Card2/Card';
import Features from './components/Features2/Features'
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Card/>
      <Features1/>
      <Card2/>
      <Features/><br/><br/><br/>
      <Footer/>
      
     
    </div>
    </>
  );
}

export default App;
