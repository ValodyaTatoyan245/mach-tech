import React from "react";
import { Field, Form, useFormikContext } from "formik";
import { colorTypes as colors } from "../../utils/helpers/color-types";
import { resetShow } from "../../store/slice/PopUpSlice/PopUpSlice";
import { useDispatch } from "react-redux";

function PasswordForm() {
  const dispatch = useDispatch();
  const { values, submitForm, setFieldValue } = useFormikContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(values.password);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between gap-3 items-start"
    >
      <div className="flex w-full justify-between gap-1 items-between">
        <label htmlFor="name" className="text-sm">
          Название:
        </label>
        <Field
          type="text"
          id="name"
          name="name"
          placeholder="Название"
          className="w-2/3 py-2 border-2 shadow-cyan-700 focus:bg-cyan-300"
        />
      </div>
      <div className="flex w-full justify-between gap-1 items-between">
        <label htmlFor="login" className="text-sm">
          Логин:
        </label>
        <Field
          type="text"
          id="login"
          name="login"
          placeholder="Логин"
          className="w-2/3 py-2 border-2 shadow-cyan-700 focus:bg-cyan-300"
        />
      </div>
      <div className="flex w-full justify-between gap-1 items-between">
        <label htmlFor="password" className="text-sm">
          Пароль:
        </label>
        <div className="relative flex items-center">
          <Field
            type="text"
            id="password"
            name="password"
            placeholder="Пароль"
            className="w-2/3 py-2 border-2 shadow-cyan-700 focus:bg-cyan-300"
          />
          <button
            onClick={handleCopy}
            className="absolute right-2 h-full flex items-center px-2 text-gray-500 hover:text-gray-700"
          >
            Copy
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between gap-1 items-between">
        <label htmlFor="confirmPassword" className="text-sm">
          Повторите:
        </label>
        <Field
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Повторите"
          className="w-2/3 py-2 border-2 shadow-cyan-700 focus:bg-cyan-300"
        />
      </div>
      <div className="flex w-full justify-between gap-1 items-between">
        <label htmlFor="url" className="text-sm">
          URL:
        </label>
        <Field
          type="text"
          id="url"
          name="url"
          placeholder="URL"
          className="w-2/3 py-2 border-2 shadow-cyan-700 focus:bg-cyan-300"
        />
      </div>
      <div className="flex w-full justify-between">
        <label htmlFor="description" className="text-sm">
          Описание:
        </label>
        <Field
          as="textarea"
          id="description"
          name="description"
          maxLength={1200}
          style={{ resize: "none" }}
          className="w-2/3 py-2 border-2 shadow-cyan-700 focus:bg-cyan-300"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="color" className="text-sm">
          Цвет пароля:
        </label>
        <div className="color-buttons flex  gap-1">
          {colors.map((color) => (
            <button
              id={color.name}
              name="color"
              type="button"
              key={color.id}
              className="w-8 h-8 rounded-xl"
              style={{ backgroundColor: `${color.name}` }}
              onClick={() => setFieldValue("color", color.name)}
            ></button>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-1 text-lg font-bold text-white  rounded-2xl bg-[#4698F0]"
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
}

export default PasswordForm;
