import React from "react";
import addStars from "./addStars";
import emptyStars from "./emptyStars";

function ProductDetail(props){
    var addStars = [];
    for (var i=0; i<props.product.rating; i++){
        addStars.push(<addStars />);
    }
    var emptyStars = [];
    for (var i=0; i<5-props.product.rating; i++){
        emptyStars.push(<emptyStars />);
    }
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
                                    {addStars}
                                    {emptyStars}
                                </p>
                            </div>
                        </div>
        </div>
    )
}

export default ProductDetail;
