import React, { useContext } from "react";
import { DataContext } from "../DataContext";

const Details = (props) => {
  var id = props.location.cardProps.id.id;
  console.log(id);

  const [data, setData] = useContext(DataContext);

  return (
    <React.Fragment>
      {" "}
      <div>
        <h1>{id}</h1>
      </div>{" "}
    </React.Fragment>
  );
};

export default Details;
