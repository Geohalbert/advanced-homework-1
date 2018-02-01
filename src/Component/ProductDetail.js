import React from "react";
import addStars from "./addStars";
import emptyStars from "./emptyStars";

function allStars(rating){
  var allStars = [];
  for (var i=1; i<rating+1; i++){
      allStars.push(<span className="glyphicon glyphicon-star" key={i} />);
      console.log("allStars: addStars ", allStars);
  }
  for (var j=5; j>rating; j--){
      allStars.push(<span className="glyphicon glyphicon-star-empty" key={j}/>);
      console.log("allStars: emptyStars ", allStars)
  }
  return allStars;
}

function ProductDetail(props){
    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
                        <div className="thumbnail">
                            <img src={props.product.imgUrl} alt=""/>
                            <div className="caption">
                                <h4 className="pull-right">{props.product.price}</h4>
                                <h4><a href="#">{props.product.name}</a>
                                </h4>
                                <p>{props.product.description}</p>
                            </div>
                            <div className="ratings">
                                <p className="pull-right">{props.product.reviews} reviews</p>
                                <p>
                                    {allStars(props.product.rating)}
                                </p>
                            </div>
                        </div>
        </div>
    )
}

export default ProductDetail;
