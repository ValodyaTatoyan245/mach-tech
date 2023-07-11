import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonsController from "../ButtonsController/ButtonsController";
import SearchInC from "../SearchInC/SearchInC";

import { selectLeftButton } from "../../store/slice/LeftButtonSlice/LeftButtonSlice";
import { togglePopUp } from "../../store/slice/PopUpSlice/PopUpSlice";
import FolderList from "./FolderList";

function Controller() {
  const dispatch = useDispatch();

  const { showContent } = useSelector(selectLeftButton);

  return (
    <div className="Controller basis-1/5 bg-white overflow-scroll ">
      {showContent ? <ButtonsController /> : <SearchInC />}
      <div className="w-full flex flex-col justify-center gap-1rem pt-4">
        <button onClick={() => dispatch(togglePopUp("newFolder"))}>
          Add Folder
        </button>
        <FolderList />
      </div>
    </div>
  );
}

export default Controller;
