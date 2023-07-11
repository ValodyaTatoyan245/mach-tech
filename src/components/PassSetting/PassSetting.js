import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActivePass,
  setPasswordOnEdit,
} from "../../store/slice/AddEditFolderSlice/AddEditFolderSlice";
import { togglePopUp } from "../../store/slice/PopUpSlice/PopUpSlice";

const PassSetting = () => {
  const { name, login, password, url, description } =
    useSelector(selectActivePass);
  const activePass = useSelector(selectActivePass);
  const dispatch = useDispatch();
  const buttons = [
    {
      id: 0,
      icon: "",
      text: "Доступ",
    },
    {
      id: 1,
      icon: "",
      text: "story",
    },
    {
      id: 2,
      icon: "",
      text: "Изменить",
      popup: "password",
    },
    {
      id: 3,
      icon: "",
      text: "ссылка",
    },
  ];
  const handleButtonClick = (e, popup) => {
    if (popup) {
      dispatch(setPasswordOnEdit(activePass));
      dispatch(togglePopUp(popup));
    } else {
      e.preventDefault();
      dispatch(setPasswordOnEdit(activePass));
      navigator.clipboard.writeText(url ? url : "");
    }
  };

  return (
    name && (
      <div className="h-full flex flex-col gap-5 bg-white">
        <h2 className="bg-[#E8F0FF] py-5 px-3 text-[#4698F0] text-lg capitalize font-bold">
          {name}
        </h2>
        <div className="flex flex-col gap-2">
          <span className="flex">
            <span>Логин: </span>
            <span className="w-2/3 p-2 border-2 rounded-2xl">{login} </span>
          </span>
          <span className="flex">
            <span>Пароль: </span>
            <span className="w-2/3 p-2 border-2 rounded-2xl">{password} </span>
          </span>
          <span>
            <span>URL: </span>
            <span name="url">{url} </span>
          </span>
          <span className="flex flex-col justify-center items-center">
            <span className="self-start">Коментарий: </span>
            <span className="w-2/3 p-2 border-2 rounded-2xl">
              {description}{" "}
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

export default PassSetting;
