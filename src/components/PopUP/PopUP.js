import React from "react";
import { useDispatch } from "react-redux";

import { resetShow } from "../../store/slice/PopUpSlice/PopUpSlice";

function PopUP({ show, children }) {
  const dispatch = useDispatch();

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  return (
    show && (
      <div
        className=" w-screen h-screen flex justify-center items-center bg-gray-900/90 fixed top-0 left-0 "
        onClick={() => dispatch(resetShow())}
      >
        <div
          className="w-[500px] h-[600px] flex flex-col gap-5 items-center z-100 bg-white"
          onClick={handlePopupClick}
        >
          <div className="w-full flex justify-between bg-[#E8F0FF] p-5 text-[#4698F0]  text-xl capitalize font-bold">
            <h2>{show}</h2>
            <button
              className="text-blue text-bolder"
              onClick={() => dispatch(resetShow())}
            >
              X
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default PopUP;
