import axios from "axios";
import React, { useEffect, useState } from "react";
import { Lines } from "react-preloaders";
import Acordion from "./components/Acordion";

const App = () => {
  const [payload, setPayload] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const { data } = await axios.get(
      "https://api.npoint.io/4890452eb36de8bbdb99"
      // "https://api.npoint.io/4e6774c9c5b4018f54d1"
      // "https://api.npoint.io/c785f2c0e50bd013c3a3"
    );
    // console.log("Data : ", data);
    setPayload(data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen">
      <Lines customLoading={loading} />
      <h2 className="rounded-md p-3 text-gray-700 sm:text-gray-900 text text-center font-extrabold text-2xl sm:text-4xl">
        30 DAYS OF DSA
      </h2>
      <div className="block m-auto w-[100vw] sm:w-[60vw]">
        <Acordion payload={payload} />
      </div>
    </div>
  );
};

export default App;
