import React, { useState, useEffect } from "react";
import CustomProduct from "../components/custom_product";
import CustomHeader from "../components/custom_header";
import CustomBanner from "../components/custom_banner";
import axios from "axios";
import "../App.css";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/todos");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        maxWidth: "70%",
        margin: "auto",
      }}
    >
      <div style={{ height: "5vh" }}>
        <CustomHeader />
      </div>
      <CustomBanner />
      <div style={{ height: "50px" }}></div>
      <div className="allProdContainerGrid">
        {data.map((value) => (
          <CustomProduct
            title={value.title}
            description={value.description}
            imageSrc="https://picsum.photos/200"
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
