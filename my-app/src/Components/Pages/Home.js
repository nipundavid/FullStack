import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useContext(DataContext);
  return (
    <div className="container">
      <div className="row mt-5">
        {" "}
        {data.data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            img={item.img}
            headerTitle={item.headerTitle}
            headerSubtitle={item.headerSubTitle}
            headerText={item.headerText}
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
