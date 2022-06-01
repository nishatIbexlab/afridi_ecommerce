import React, { useState, useEffect } from 'react'
import CustomProduct from '../components/custom_product';
import axios from 'axios';

function HomePage() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div style={{ backgroundColor: "#fafafa" }}>
            {<CustomProduct props={"Hllo"} />}
        </div>
    );
}

export default HomePage;
