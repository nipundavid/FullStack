import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import ShowData from "./Card";

const Home = () => {
  const [data, setData] = useContext(DataContext);

  return (
    <div className="container">
      <div className="row mt-5">
        {data.data.map((item) => (
          <ShowData
            key={item.id}
            img={item.img}
            headerTitle={item.headerTitle}
            headerSubtitle={item.headerSubTitle}
            headerText={item.headerText}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
