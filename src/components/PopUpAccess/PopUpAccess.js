import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAccess,
  delAccess,
  selectActiveFolder,
} from "../../store/slice/AddEditFolderSlice/AddEditFolderSlice";
import { BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import {
  selectUsers,
  toggleRole,
  toggleShowUsers,
} from "../../store/slice/UsersSlice/UsersSlice";
import { resetShow } from "../../store/slice/PopUpSlice/PopUpSlice";

function PopUpAccess() {
  const [access, setAccess] = useState([]);
  const dispatch = useDispatch();
  const activeFolder = useSelector(selectActiveFolder);
  const { user, showUsers } = useSelector(selectUsers);

  let filteredUsers =
    activeFolder.access.length > 0
      ? user.filter(
          (us) => us.id !== activeFolder.access.find((f) => f.id == us.id)?.id
        )
      : user;
  const handleSubmit = () => {
    dispatch(addAccess(access));
    dispatch(resetShow());
    setAccess([]);
  };
  return (
    <div>
      <table>
        <thead>
          {activeFolder.access.length > 0 &&
            activeFolder.access.map((el) => (
              <tr key={el.id}>
                <th className="flex itmes-center justify-start gap-3">
                  <BiUser color="blue" />
                  {el.firstName}
                  {el.lastName}
                </th>
                <th>{el.role || "Читатель"}</th>
                <th onClick={() => dispatch(delAccess(el.id))}>X</th>
              </tr>
            ))}
        </thead>
      </table>
      <button onClick={() => dispatch(toggleShowUsers())}>
        Добавить пользователя
      </button>
      {showUsers && (
        <div className="w-full py-2 px-5 border-2 shadow-cyan-700 focus:bg-cyan-300">
          <div className="flex w-full gap-2 items-center justify-between">
            <input
              type="text"
              placeholder="Search"
              className="py-2 border-2 shadow-gray-500"
            />
            <FiSearch />
          </div>
          <div className="w-full border-2 gap-3">
            {filteredUsers.map((el) => (
              <div
                className="w-full flex flex-row items-start justify-between"
                key={el.id}
              >
                <input
                  type="checkbox"
                  className="border-2 shadow-gray w-5 h-5 gap-3"
                  onChange={() => setAccess([...access, el])}
                />
                <span>{el.firstName}</span>
                <br />
                <span>{el.lastName} </span>
                <select
                  onChange={(e) =>
                    dispatch(toggleRole({ id: el.id, role: e.target.value }))
                  }
                >
                  <option>Права</option>
                  <option>Редактирование</option>
                  <option>Чтение</option>
                </select>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-1 text-lg font-bold text-white  rounded-2xl bg-[#4698F0]"
            onClick={() => {
              handleSubmit();
            }}
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
        </div>
      )}
    </div>
  );
}

export default PopUpAccess;
