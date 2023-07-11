import React from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FiFolderPlus } from "react-icons/fi";
import { BsGear, BsKey } from "react-icons/bs";

import { toggleContent } from "../../store/slice/LeftButtonSlice/LeftButtonSlice";
import { togglePopUp } from "../../store/slice/PopUpSlice/PopUpSlice";
import { resetFolderOnEdit, resetPasswordOnEdit, selectActiveFolder } from "../../store/slice/AddEditFolderSlice/AddEditFolderSlice";

const buttons = [
  {
    id: 0,
    popup: "newFolder",
    icon: <FiFolderPlus size={32} />,
  },
  {
    id: 1,
    popup: "password",
    icon: <BsKey size={32} />,
  },
  {
    id: 2,
    popup: "setting",
    icon: <BsGear size={32} />,
  },
  {
    id: 3,
    popup: " ",
    icon: <FaSearch size={32} />,
  },
];

function ButtonsController() {
  const dispatch = useDispatch();
  const activeFolder = useSelector(selectActiveFolder);
  const handleSubmit = (id, popup) => {
    if (id === 1 || id === 2) {
      if (activeFolder.id) {
        dispatch(togglePopUp(popup));
      }
    } else if(id===0 || id === 1){
      dispatch(togglePopUp(popup));
      dispatch(resetFolderOnEdit())
      dispatch(resetPasswordOnEdit())
    }
    else {
      dispatch(togglePopUp(popup));
    }
  };
  return (
    <div className="w-full h-16 flex justify-evenly items-center bg-[#4698F0]">
      {buttons.map(({ id, popup, icon }) => (
        <button
          key={id}
          onClick={() =>
            id < 3 ? handleSubmit(id, popup) : dispatch(toggleContent())
          }
        >
          <span className="w-16 h-16 ">{icon}</span>
        </button>
      ))}
    </div>
  );
}

export default ButtonsController;
