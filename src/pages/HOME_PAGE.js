import React, { useState, useEffect } from "react";
import CustomProduct from "../components/custom_product";
import CustomHeader from "../components/custom_header";
import CustomBanner from "../components/custom_banner";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/todos");
      setData(result.data);
    };
    fetchData();
  }, []);

  data.map((value) => console.log(value.title));

  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <div style={{ height: "5vh" }}>
        <CustomHeader />
      </div>
      <CustomBanner />
      {<CustomProduct props={"Hllo"} />}
    </div>
  );
}

export default HomePage;
