import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectActiveFolder,
  selectActivePass,
} from "../../store/slice/AddEditFolderSlice/AddEditFolderSlice";
import FolderSetting from "../FolderSetting/FolderSetting";
import PassSetting from "../PassSetting/PassSetting";

const Settings = () => {
  const activeFolder = useSelector(selectActiveFolder);
  const activePass = useSelector(selectActivePass);
  useEffect(()=>{},[activeFolder,activePass])
  return (
    <div className="basis-1/5">
      {activeFolder.name && !activePass.name && <FolderSetting />}
      {activePass.name && <PassSetting />}
      {!activeFolder.name && (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <span>Тут пока ничего нет...</span>
        </div>
      )}
    </div>
  );
};

export default Settings;
