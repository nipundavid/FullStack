import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContext";

const Details = (props) => {
  const [data, setData] = useContext(DataContext);
  const [dataItem, setDataItem] = useState([]);

  useEffect(() => {
    var id = props.location.cardProps.id.id;
    console.log(id);
    var v = data.data.filter((item) => item.id === id)[0];
    console.log(v);
    setDataItem(v);
  }, []);

  return (
    <React.Fragment>
      {" "}
      <div>
        <h1>{dataItem.id}</h1>
      </div>{" "}
    </React.Fragment> 
  );
};

export default Details;
