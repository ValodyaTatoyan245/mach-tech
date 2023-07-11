import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeF,
  selectAddEditFolder,
} from "../../store/slice/AddEditFolderSlice/AddEditFolderSlice";
import {
  BsFolder2,
  BsFolder2Open,
  BsFolderCheck,
  BsFolderFill,
  BsFolderMinus,
  BsFolderSymlink,
} from "react-icons/bs";
import { selectSearch } from "../../store/slice/SearchSlice/SearchSlice";

const FolderList = () => {
  const dispatch = useDispatch();
  const { folders } = useSelector(selectAddEditFolder);
  const search = useSelector(selectSearch);

  const filteredFolders = search
    ? folders?.filter((folder) => folder.name.includes(search))
    : folders;

  const renderIconComponent = (iconName, color) => {
    const iconObject = {
      BsFolderSymlink: <BsFolderSymlink style={{ color: `${color}` }} />,
      BsFolderMinus: <BsFolderMinus style={{ color: `${color}` }} />,
      BsFolder2Open: <BsFolder2Open style={{ color: `${color}` }} />,
      BsFolderCheck: <BsFolderCheck style={{ color: `${color}` }} />,
      BsFolder: <BsFolderFill style={{ color: `${color}` }} />,
      BsFolder2: <BsFolder2 style={{ color: `${color}` }} />,
    };

    return iconObject[iconName || "BsFolder"];
  };

  return (
    <div className="w-full h-96 ">
      <ul className="parent">
        {!!filteredFolders.length &&
          filteredFolders.map((folder, index) => (
            <li
              key={folder.id}
              className={` p-8 flex itesms-center justify-around`}
            >
              {renderIconComponent(folder.icon, folder.color)}
              <h2 onClick={(e) => dispatch(activeF({ ...folder }))} className=" cursor-pointer">
                {folder.name}
              </h2>
              <ul>
                {folder.secondaryFolder?.map((sec) => (
                  <li key={sec.id}>
                    {renderIconComponent(sec.icon, sec.color)}
                    <h2 onClick={(e) => dispatch(activeF({ ...sec }))} className=" cursor-pointer">
                      {sec.name}
                    </h2>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FolderList;
