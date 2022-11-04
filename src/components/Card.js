// import image from '../images/image 12.png'
import star from '../images/Star1.png'

function Card(props) {
    return ( 
        <div className="card">
            <img className='card-image' src={require(`../images/${props.img}.png`)} alt="swimmer" />
            <div className="card-tag">
                <p><img className='star' src={star} alt="" /> {props.rating} <span> ({props.reviewCount}) &middot; {props.country} </span></p>
                <p className="card-tag__title">{props.title}</p>
                <p className="card-tag__price"><strong>From {props.price}$ </strong>/ person</p>
        </div>   
        </div>
     );
}

export default Card;