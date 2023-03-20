import React, { useState } from "react";
import Table from "./Table";

const Accordion = ({ payload }) => {
  console.log("Payload :", payload);
  const [isActive, setIsActive] = useState(true);
  const [numsChecked, setNumsChecked] = useState(0);
  const handleChange = (e) => {
    if (e.target.checked) {
      setNumsChecked(numsChecked + 1);
    } else {
      setNumsChecked(numsChecked - 1);
    }
  };
  return (
    <div className="w-[90vw] sm:w-[60vw] block m-auto flex-col">
      <div
        className="bg-gray-200 cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex justify-between m-2 p-3">
          <h3>
            <b>DATA STRUCTURES</b>
          </h3>
          <div className="flex gap-2 sm:gap-3">
            <input
              className="accent-green-400 w-20 sm:w-56"
              type="range"
              name=""
              id=""
              min={0}
              value={numsChecked}
              max={10}
            />
            <h3 className="font-extrabold text-xl">{isActive ? "x" : "+"}</h3>
          </div>
        </div>
      </div>
      {isActive && (
        <div className="flex justify-center">
          <Table handleChange={handleChange} payload={payload} />
        </div>
      )}
    </div>
  );
};

export default Accordion;
