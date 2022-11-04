import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import image from './images/image 12.png'


function App() {
  return (
    <div >
      <NavBar/>
      <Hero/>
      <div>
        <Card
        img={image}
        rating={'5.0'}
        reviewCount={6}
        country={'USA'}
        title={'Life Lessons with Marie Zafares'}
        price={136}
        />
      </div>
    </div>
  );
}

export default App;
