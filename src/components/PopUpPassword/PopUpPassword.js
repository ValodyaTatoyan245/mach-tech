import React from "react";
import GlobalFormik from "../form/GlobalFormik";
import PasswordForm from "./PasswordForm";
import { addPasword, editPass, selectpassOnEdit } from "../../store/slice/AddEditFolderSlice/AddEditFolderSlice";
import { useSelector } from "react-redux";

const PopUpPassword = () => {
  const initialValues = {
    name: "",
    login: "",
    password: "",
    confirmPassword: "",
    url: "",
    description: "",
    color: "",
  };
 
  const passOnEdit = useSelector(selectpassOnEdit)
  return (
    <GlobalFormik
      initialValues={passOnEdit || initialValues}
      dispatcher={passOnEdit ? editPass : addPasword}
      onEdit={passOnEdit}
    >
      <PasswordForm />
    </GlobalFormik>
  );
};

export default PopUpPassword;
