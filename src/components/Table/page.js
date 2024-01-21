import React from "react";

const DynamicTable = ({ columns, dataSource }) => {
  return (
    <table
      className="items-center w-full bg-transparent border-collapse"
    >
      <thead>
        <tr>
          {columns?.map((column, index) => (
            <th
              key={index}
              className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {dataSource?.map((item, rowIndex) => (
          <tr key={rowIndex} className="text-gray-500">
            {columns?.map((column, colIndex) => (
              <td
                key={colIndex}
                className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4"
              >
                {column.dataIndex === "percentage" ? (
                  <ProgressBar percentage={item[column.dataIndex]} />
                ) : (
                  item[column.dataIndex]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ProgressBar = ({ percentage }) => (
  <div className="flex items-center">
    <span className="mr-2 text-xs font-medium">{percentage}</span>
    <div className="relative w-full">
      <div className="w-full bg-gray-200 rounded-sm h-2">
        <div
          className="h-2 rounded-sm"
          style={{
            width: percentage,
            backgroundColor: getProgressBarColor(percentage),
          }}
        ></div>
      </div>
    </div>
  </div>
);
function getProgressBarColor(percentage) {
  const value = parseInt(percentage, 10);
  if (value >= 30) return "bg-cyan-600";
  if (value >= 24) return "bg-orange-300";
  if (value >= 18) return "bg-teal-400";
  if (value >= 12) return "bg-pink-600";
  if (value >= 9) return "bg-indigo-600";
  return "bg-purple-500";
}

export default DynamicTable;
