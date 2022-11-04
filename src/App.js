import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div >
      <NavBar/>
      <Hero/>
      <div>
        <Card/>
      </div>
    </div>
  );
}

export default App;
