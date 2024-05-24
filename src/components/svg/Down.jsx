import React from "react";
const Down = ({indexScroll}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    fill="currentColor"
    className="bi bi-chevron-double-down transition-all duration-200 hover:size-14 cursor-pointer bg-purple-400 rounded-full p-1 bg-opacity-30"
    viewBox="0 0 16 16"
    onClick={indexScroll}
  >
    <path
      fillRule="evenodd"
      d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
    />
    <path
      fillRule="evenodd"
      d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
    />
  </svg>
  );
};

export default Down;
