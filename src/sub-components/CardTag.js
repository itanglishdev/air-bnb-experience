import star from '../images/Star 1.png'

function CardTag() {
    return ( 
        <div className="card-tag">
                <p><img className='star' src={star} alt="" /> 5.0 <span>(6) USA </span></p>
                <p className="card-tag__title">Life lessons with Katie Zafares</p>
                <p className="card-tag__price"><strong>From 136$ </strong>/ person</p>
        </div>        
     );
}

export default CardTag;