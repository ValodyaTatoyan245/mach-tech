import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveFolder,
  setFolderOnEdit,
} from "../../store/slice/AddEditFolderSlice/AddEditFolderSlice";
import { togglePopUp } from "../../store/slice/PopUpSlice/PopUpSlice";

const FolderSetting = () => {
  const { name, description } = useSelector(selectActiveFolder);
  const activeFolder = useSelector(selectActiveFolder);
  const dispatch = useDispatch();

  const buttons = [
    {
      id: 0,
      icon: "",
      text: "Доступ",
      popup: "access",
    },
    {
      id: 1,
      icon: "",
      text: "История",
      popup: "story",
    },
    {
      id: 2,
      icon: "",
      text: "Изменить",
      popup: "newFolder",
    },
    {
      id: 3,
      icon: "",
      text: "ссылка",
      popup: "",
    },
  ];

  const handleButtonClick = (e, popup) => {
    dispatch(togglePopUp(popup));
    if (popup) {
      dispatch(setFolderOnEdit(activeFolder));
      dispatch(togglePopUp(popup));
    } else {
      e.preventDefault();
      dispatch(setFolderOnEdit(activeFolder));
      navigator.clipboard.writeText(name);
    }
  };

  return (
    name && (
      <div className="h-full flex flex-col gap-5 bg-white">
        <h2 className="bg-[#E8F0FF] py-5 px-3 text-[#4698F0] text-lg capitalize font-bold ">
          {name}
        </h2>
        <div className="flex flex-col gap-2">
          <span className="flex">
            <span>Название: </span>
            <span className="w-2/3 p-2 border-2 rounded-2xl">{name}</span>
          </span>
          <span className="flex flex-col justify-center items-center">
            <span className="self-start">Описание: </span>
            <span className=" w-3/4 p-2 rounded-md border-2">
              {description}
            </span>
          </span>
        </div>
        <div>
          {buttons.map(({ id, text, icon, popup }) => (
            <button
              key={id}
              onClick={(e) => handleButtonClick(e, popup)}
              className="p-1 border-2 shadow-indigo-400 rounded-lg bg-[#E8F0FF] text-[#4698F0]"
            >
              <span>{icon}</span>
              <span>{text}</span>
            </button>
          ))}
        </div>
      </div>
    )
  );
};

export default FolderSetting;
