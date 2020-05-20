import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="row justify-content-center">
        <div className="card mr-5 ml-5 mt-5" style={{ width: "500px" }}>
          <div className="row no-gutters">
            <div className="col-sm-5">
              <img
                className="card-img"
                src={props.img}
                alt="Suresh Dasari Card"
              />
            </div>
            <div className="col-sm-7">
              <div className="card-body">
                <h5 className="card-title">{props.headerTitle}</h5>
                <p className="card-text">{props.headerSubtitle}</p>
                <Link to="#" className="btn btn-primary">
                  See More...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
