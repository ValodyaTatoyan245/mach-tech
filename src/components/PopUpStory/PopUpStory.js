import React from "react";
import { BiCalendar, BiTime, BiUser } from "react-icons/bi";
import { BsLock } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectUsers } from "../../store/slice/UsersSlice/UsersSlice";
function PopUpStory() {
  const {users} = useSelector(selectUsers);

  return (
    <table className="w-full">
      <thead className="w-full">
        <tr className="">
          <td className="bg-[#f2f2f2] ">
            <BiUser color="blue" />
            Пользователь
          </td>
          <td className="bg-[#f2f2f2] ">
            <BsLock color="blue" />
            Права доступа
          </td>
          <td className="bg-[#f2f2f2] ">
            <BiTime color="blue" />
            История
          </td>
          <td className="bg-[#f2f2f2] ">
            <BiCalendar color="blue" />
            Дата
          </td>
        </tr>
      </thead>
      <tbody>
        {users?.map((el) => {
          if (el.id < 4) {
            return (
              <tr key={el.id}>
                <td className="flex itmes-center justify-start gap-3">
                  <BiUser color="blue" />
                  {el.firstName}
                  {el.lastName}
                </td>
                <td>{el.role || "Читатель"}</td>
                <td>Изменение пароля</td>
                <td>13.07.2023, в 14:03</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}

export default PopUpStory;
