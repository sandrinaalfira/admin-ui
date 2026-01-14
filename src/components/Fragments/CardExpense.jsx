import React from "react";

function CardExpense(props) {
  const { item } = props;

  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <span className="text-gray-02 font-semibold text-sm">
          {item.category}
        </span>
      </div>

      {/* Main Card Container */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-05 overflow-hidden">
        <div className="bg-gray-05 p-4 flex justify-between items-start">
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-lg flex items-center justify-center shadow-sm">
              {item.icon}
            </div>
            <div className="ms-3">
              <div className="text-xl font-bold text-black">${item.amount}</div>
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center justify-end text-[12px] font-medium text-gray-02 mb-1">
              {item.percentage}%<span className="ms-1">{item.arrow}</span>
            </div>
            <div className="text-[10px] text-gray-03 leading-tight">
              Compare to <br /> last month
            </div>
          </div>
        </div>

        <div className="px-4 bg-white">
          {item.details.map((sub, index) => (
            <div
              key={sub.id}
              className={`py-3 ${
                index !== item.details.length - 1
                  ? "border-b border-gray-05"
                  : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="text-left">
                  <span className="font-bold text-xs text-black">
                    {sub.name}
                  </span>
                </div>

                <div className="flex flex-col text-right">
                  <span className="font-bold text-xs text-black mb-1">
                    ${sub.amount}
                  </span>
                  <span className="text-[10px] text-gray-03 font-medium">
                    {sub.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardExpense;