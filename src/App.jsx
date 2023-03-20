import axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from "./components/Accordion";

const App = () => {
  const [payload, setPayload] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      "https://api.npoint.io/9a5d0569ef1bca8cef23"
    );
    // console.log("Data : ", data);
    setPayload(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2 className="rounded-md p-3 text-gray-700 sm:text-gray-900 text text-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 font-extrabold text-2xl m-5 sm:text-4xl">
        {" "}
        30 DAYS OF DSA
      </h2>
      <div className="block m-auto">
        <Accordion payload={payload} />
      </div>
    </div>
  );
};

export default App;
