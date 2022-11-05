import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import './styles.css'
import NavBar from './components/NavBar';
// import image from './images/image12.png'
import data from './Data'


function App() {


  const card = data.map((item) => {
    return (
      <Card 
        key={item.id}
        item={item} />)
  }
  )

  return (
    <div >
      <NavBar/>
      <Hero/>
      <div className='cards-presentation'>
        {card}
      </div>
    </div>
  );
}

export default App;
