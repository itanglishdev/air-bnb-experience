// import '../styles.css'
import logo from '../components/images/airbnb-logo.png'

function NavBar() {
    return ( 
        <nav>
            <img className='main-logo' src={logo} alt="AirBNB" />
            
        </nav>
     );
}

export default NavBar;