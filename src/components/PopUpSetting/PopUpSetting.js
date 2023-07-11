
import React, { useState } from "react";

function PopUpSetting() {
  const [show, setShow] = useState("");
  const handleSubmit = (value) => {
    switch (value) {
      case "barev":
        setShow("one");
        break;

      default:
        break;
    }
  };
  return (
    <div className="PopUpSetting  w-full p-5 flex items-start flex-col gap-2">

      <button className=" px-4 py-2 border  text-black rounded-lg hover:bg-[#E8F0FF]">
        Импорт паролей
      </button>

      <button

        className="px-4 py-2 border text-black rounded-lg hover:bg-[#E8F0FF]"
      >
        Экспорт данных в .CSV
      </button>

      <button className="px-4 py-2 border text-black rounded-lg hover:bg-[#E8F0FF]">
        Получить отчет действий пользователей
      </button>

      <button className="px-4 py-2 border text-black rounded-lg hover:bg-[#E8F0FF]">
        Отредактировать права на корневую папку
      </button>

      <button className="px-4 py-2 border text-black rounded-lg hover:bg-[#E8F0FF]">
        Забирать права
      </button>
    </div>
  );
}

export default PopUpSetting;
