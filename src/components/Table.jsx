import React from "react";

const Table = ({ handleChange, payload }) => {
  return (
    <div>
      <table className="border-collapse table-auto w-[85vw] sm:w-[55vw] border-gray-200 border-2 mb-10">
        <thead>
          <tr className="bg-gray-300 text-gray-900 uppercase font-bold text-xs leading-normal">
            <th className="py-2 px-2 w-20 text-left">day</th>
            <th className="py-3 px-4 text-left"></th>
            <th className="py-3 px-4 text-left">Title</th>
            <th className="py-3 px-4 text-left">Link</th>
          </tr>
        </thead>
        {payload &&
          payload.map((data, i) => (
            <tbody key={i}>
              <tr className="bg-white border-b border-gray-200">
                <td className="py-2 px-2 text-left">Day {data.id}</td>
                <td className="py-3 px-2 text-left">
                  <input
                    className="accent-green-400"
                    type="checkbox"
                    onChange={handleChange}
                  />
                </td>
                <td className="py-3 px-4">{data.title}</td>
                <td className="py-3 px-4 text-blue-500 underline cursor-pointer">
                  <a href={data.completed} target={"_blank"}>
                    link
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default Table;
