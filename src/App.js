import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import './styles.css'
import NavBar from './components/NavBar';
// import image from './images/image12.png'
import data from './Data'


function App() {


  const card = data.map((item,idx) => {
    return <Card 
    key={item.id}
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    country={item.location}
    title={item.title}
    price={item.price} />
  })

  return (
    <div >
      <NavBar/>
      <Hero/>
      <div>
        {card}
        {/* <Card
        img="image12"
        rating={'5.0'}
        reviewCount={6}
        country={'USA'}
        title={'Life Lessons with Marie Zafares'}
        price={136}
        /> */}
      </div>
    </div>
  );
}

export default App;
