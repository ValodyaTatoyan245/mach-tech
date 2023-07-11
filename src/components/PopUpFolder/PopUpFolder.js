import React from "react";
import GlobalFormik from "../form/GlobalFormik";
import FolderForm from "./FolderForm";
import {
  editFolder,
  addFolder,
  selectFolderOnEdit,
} from "../../store/slice/AddEditFolderSlice/AddEditFolderSlice";
import { useSelector } from "react-redux";

const initialValues = {
  name: "",
  description: "",
  chapter: "",
  color: "",
  icon: "",
};

const PopUpFolder = () => {
  const folderOnEdit = useSelector(selectFolderOnEdit);
  return (
    <GlobalFormik
      initialValues={folderOnEdit || initialValues}
      dispatcher={folderOnEdit ? editFolder : addFolder}
      onEdit={folderOnEdit}
    >
      <FolderForm />
    </GlobalFormik>
  );
};

export default PopUpFolder;
