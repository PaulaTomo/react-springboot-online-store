import "../Styles/card.css"
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";


function MyCard(props) {
    return (

        <Card className="card-collection p-0 "
              style={{width: '18rem'}}>
            <Link to="/dresses">
                <Card.Img variant="top" src={props.imageSrc}
                          className="img-card"/>

            </Link>
            <div className="d-inline-flex justify-content-between  p-3">
                <p className="text-muted">{props.nameDress}</p>
                <p className="fw-bold price">{props.price + "€"}</p>

            </div>
            <span className="favorite-icon favorite-icon-circle ">
    <i className="fa fa-heart" aria-hidden="true"></i>
  </span>
            <div className="colors-dress">
                <i className="circle favorite-icon-circle bg-danger"/>
                <i className="circle favorite-icon-circle bg-black"/>
                <i className="circle favorite-icon-circle color-red"/>
                <i className="circle favorite-icon-circle color-purple"/>
                <i className="circle favorite-icon-circle color-aqua"/>
                <i className="circle favorite-icon-circle bg-primary"/>


            </div>
        </Card>


    );
}


export default MyCard;