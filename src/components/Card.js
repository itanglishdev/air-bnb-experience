import star from '../components/images/Star1.png'


function Card(props) {
    let badgeText
    if (props.item.openSpots === 0){
        badgeText= 'SOLD OUT'
    } else if (props.item.location === 'Online' ) {
        badgeText = 'ONLINE'
    } 
  

    return ( 
        <div className="card">
           {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className='card-image' src={props.item.coverImg} alt="swimmer" />
            <div className="card-tag">
                <p><img className='star' src={star} alt="" /> {props.item.stats.rating} <span> ({props.item.stats.reviewCount}) &middot; {props.item.country} </span></p>
                <p className="card-tag__title">{props.item.title}</p>
                <p className="card-tag__price"><strong>From {props.item.price}$ </strong>/ person</p>
        </div>   
        </div>
     );
}

export default Card;