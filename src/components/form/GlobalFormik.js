import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { reset, setFolderOnEdit, setPasswordOnEdit } from "../../store/slice/AddEditFolderSlice/AddEditFolderSlice";
import { resetShow } from "../../store/slice/PopUpSlice/PopUpSlice";

function GlobalFormik({
  initialValues,
  validationSchema,
  dispatcher,
  onEdit,
  children,
}) {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(dispatcher({ ...onEdit, ...values }));
    onEdit && dispatch(setPasswordOnEdit(null))
    onEdit && dispatch(setFolderOnEdit(null))
    dispatch(reset())
    dispatch(resetShow())
  };

  return (
    <div className="popup-folder">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {children}
      </Formik>
    </div>
  );
}

export default GlobalFormik;
