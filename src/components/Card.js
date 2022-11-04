import CardImage from "../sub-components/CardImage";
import CardTag from "../sub-components/CardTag";

function Card() {
    return ( 
        <div className="card">
            <CardImage/>
            <CardTag/>
        </div>
     );
}

export default Card;