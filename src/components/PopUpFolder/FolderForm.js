import { Field, Form, useFormikContext } from "formik";
import React from "react";
import { FiFolder, FiSearch } from "react-icons/fi";
import {
  selectAddEditFolder,
  show,
} from "../../store/slice/AddEditFolderSlice/AddEditFolderSlice";

import {
  BsFolder2,
  BsFolder2Open,
  BsFolderCheck,
  BsFolderFill,
  BsFolderMinus,
  BsFolderSymlink,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { folderIconTypes as icons } from "../../utils/helpers/icon-types";
import { colorTypes as colors } from "../../utils/helpers/color-types";
import { resetShow } from "../../store/slice/PopUpSlice/PopUpSlice";
const renderIconComponent = (iconName, color) => {
  const iconObject = {
    BsFolderSymlink: <BsFolderSymlink style={{ color: `${color}` }} />,
    BsFolderMinus: <BsFolderMinus style={{ color: `${color}` }} />,
    BsFolder2Open: <BsFolder2Open style={{ color: `${color}` }} />,
    BsFolderCheck: <BsFolderCheck style={{ color: `${color}` }} />,
    BsFolder: <BsFolderFill style={{ color: `${color}` }} />,
    BsFolder2: <BsFolder2 style={{ color: `${color}` }} />,
  };

  return iconObject[iconName];
};

const FolderForm = () => {
  const { values, submitForm, setFieldValue } = useFormikContext();
  const { folders, showChapter } = useSelector(selectAddEditFolder);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      action=""
      className="flex flex-col justify-between gap-3 items-start"
    >
      <div className="flex w-full justify-between gap-1 items-between">
        <label htmlFor="name">Название:</label>
        <Field
          type="text"
          id="name"
          name="name"
          placeholder="Название"
          className="w-2/3 py-2 border-2 shadow-cyan-700 focus:bg-cyan-300"
        />
      </div>
      <div className="flex w-full justify-between">
        <label htmlFor="description">Описание:</label>
        <Field
          as="textarea"
          id="description"
          name="description"
          maxLength={1200}
          style={{ resize: "none" }}
          className="w-2/3 py-2 border-2 shadow-cyan-700 focus:bg-cyan-300"
        />
      </div>
      <div className="flex w-full justify-between gap-1 items-start">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <label htmlFor="Chapter">Раздел:</label>
            <button type="button" onClick={() => dispatch(show())}>
              <FiFolder />
            </button>
          </div>
          <div>
            <h2>{values.chapter}</h2>
          </div>
        </div>
        {folders && showChapter && (
          <div className="w-2/3 py-2 px-5 border-2 shadow-cyan-700 focus:bg-cyan-300">
            <div className="flex w-full gap-2 items-center justify-between">
              <Field
                type="text"
                id="namasce"
                name="sac"
                placeholder="Search"
                className="py-2 border-2 shadow-gray-500"
              />
              <FiSearch />
            </div>
            <ul>
              {folders.map((el) => (
                <li
                  key={el.id}
                  onClick={() => setFieldValue("chapter", el.id)}
                  className="p-3 flex gap-2 active:bg-blue-300 items-center cursor-pointer"
                >
                  <FiFolder />
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between gap-3 items-start">
        <label htmlFor="color">Цвет папки:</label>
        <div className="color-buttons flex gap-1">
          {colors.map((color) => (
            <button
              id={color.name}
              name="color"
              type="button"
              key={color.id}
              className={` w-8 h-8 rounded-xl `}
              style={{ backgroundColor: `${color.name}` }}
              onClick={() => setFieldValue("color", color.name)}
            ></button>
          ))}
        </div>
      </div>
      <div className="flex  justify-between gap-2 items-between">
        <label htmlFor="icon">Иконка папки:</label>
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="px-3 py-2  bg-cyan-200 border-2 shadow-cyan-700 rounded-md cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setFieldValue("icon", icon.iconName);
            }}
          >
            <Field
              as="button"
              name="icon"
              className={`folder-icon ${
                values.icon === icon.iconName ? "selected" : "5"
              }`}
            >
              {renderIconComponent(icon.iconName)}
            </Field>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full py-1 text-lg font-bold text-white  rounded-2xl bg-[#4698F0]"
        onSubmit={() => dispatch(resetShow())}
      >
        Сохранить
      </button>
      <button
        type="reset"
        className="w-full py-1 text-lg font-bold text-white  rounded-2xl bg-[#627384]"
        onClick={() => dispatch(resetShow())}
      >
        Отменить
      </button>
    </Form>
  );
};

export default FolderForm;
