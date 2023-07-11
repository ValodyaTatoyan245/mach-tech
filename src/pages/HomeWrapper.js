import React from "react";
import { useSelector } from "react-redux";

import Main from "../components/Main/Main";
import PopUP from "../components/PopUP/PopUP";
import Controller from "../components/Controller/Controller";
import PopUpSetting from "../components/PopUpSetting/PopUpSetting";
import PopUpPassword from "../components/PopUpPassword/PopUpPassword";

import { selectPopUp } from "../store/slice/PopUpSlice/PopUpSlice";
import PopUpFolder from "../components/PopUpFolder/PopUpFolder";
import Settings from "../components/Settings/Settings";
import PopUpStory from "../components/PopUpStory/PopUpStory";
import PopUpAccess from "../components/PopUpAccess/PopUpAccess";
function HomeWrapper() {
  const { showPopUp } = useSelector(selectPopUp);

  const popupObject = {
    newFolder: <PopUpFolder />,
    setting: <PopUpSetting />,
    password: <PopUpPassword />,
    story:<PopUpStory/>,
    access:<PopUpAccess/>
  };

  return (
    <div className=" relative w-full flex flex-col md:flex-row">
      <Controller />
      <Main />
      <Settings />
      <PopUP show={showPopUp}>{popupObject[showPopUp]}</PopUP>
    </div>
  );
}

export default HomeWrapper;
