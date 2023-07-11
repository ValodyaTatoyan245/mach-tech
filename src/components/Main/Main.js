import React from "react";
import { passColumns } from "../table/passColumns";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveFolder,
  setActivePass,
} from "../../store/slice/AddEditFolderSlice/AddEditFolderSlice";
import Table from "../table";

const initialData = [
  {
    name: "",
    url: "",
  },
];
function Main() {
  const { passwords } = useSelector(selectActiveFolder);
  const dispatch = useDispatch();

  const handleRowClick = (row) => {
    dispatch(setActivePass(row.original));
  };
  return (
    <div className="basis-3/5 h-full bg-indigo-100 border-4 border-gray-300 shadow-2xl shadow-slate-800">
      {
        <Table
          data={passwords || initialData}
          columns={passColumns}
          handleRowClick={handleRowClick}
        />
      }
    </div>
  );
}

export default Main;
