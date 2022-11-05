import star from '../components/images/Star1.png'


function Card(props) {

    let badgeText
    if (props.openSpots === 0){
        badgeText= 'SOLD OUT'
    } else if (props.location === 'Online' ) {
        badgeText = 'ONLINE'
    } 
  

    return ( 
        <div className="card">
           {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className='card-image' src={props.img} alt="swimmer" />
            <div className="card-tag">
                <p><img className='star' src={star} alt="" /> {props.rating} <span> ({props.reviewCount}) &middot; {props.country} </span></p>
                <p className="card-tag__title">{props.title}</p>
                <p className="card-tag__price"><strong>From {props.price}$ </strong>/ person</p>
        </div>   
        </div>
     );
}

export default Card;