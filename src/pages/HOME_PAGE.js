import React, { useState, useEffect } from "react";
import CustomProduct from "../components/custom_product";
import CustomHeader from "../components/custom_header";
import CustomBanner from "../components/custom_banner";
import CustomModal from "../components/custom_modal";
import axios from "axios";
import "../App.css";

function HomePage() {
  const [customData, setCustomData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const allProduct = await axios(
        "http://localhost/ecomPhp/Api/getAllProdApi.php"
      );
      setCustomData(allProduct.data);
    };
    fetchData();
  }, []);

  function onclick() {
    // setSelectedItem(product);
    setOpenModal(true);
  }

  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        maxWidth: "70%",
        margin: "auto",
      }}
    >
      <div style={{ height: "6vh" }}>
        <CustomHeader />
      </div>
      <CustomBanner />
      <div style={{ height: "50px" }}></div>
      <div className="allProdContainerGrid">
        {customData.map((value) => (
          <CustomProduct
            key={value.id}
            title={value.prodName}
            description={value.descriptions}
            imageSrc="https://picsum.photos/200"
            onClick={onclick}
          />
        ))}
        {openModal ? (
          <CustomModal show={openModal} onHide={() => setOpenModal(false)} />
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;
