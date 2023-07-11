import { AddEditFolderReducer } from "./slice/AddEditFolderSlice/AddEditFolderSlice";
import { LeftButtonReducer } from "./slice/LeftButtonSlice/LeftButtonSlice";
import { searchReducer } from "./slice/SearchSlice/SearchSlice";
import { PopUpReducer } from "./slice/PopUpSlice/PopUpSlice";
import { usersReducer } from "./slice/UsersSlice/UsersSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    AddEditFolder: AddEditFolderReducer,
    LeftButton: LeftButtonReducer,
    search: searchReducer,
    PopUp: PopUpReducer,
    users:usersReducer,
  },
});
export default store;
