import { createSlice } from "@reduxjs/toolkit";

const AddEditFolderSlice = createSlice({
  name: "AddEditFolder",
  initialState: {
    folders: [],
    activeFolder: {},
    folderOnEdit: null,
    passOnEdit: null,
    activePass: {},
    activeChapter: {
      id: "",
      name: "",
    },
    showChapter: false,
  },
  reducers: {
    addFolder(state, { payload }) {
      if (payload.chapter) {
        const idx = state.folders.findIndex((e) => e.id === payload.chapter);
        state.folders[idx].secondaryFolder.push({
          ...payload,
          id: new Date().getTime().toString(),
          parentId: state.folders[idx].id,
          passwords: [],
          access: [],
        });
      } else {
        state.folders.push({
          ...payload,
          secondaryFolder: [],
          passwords: [],
          access: [],
          id: new Date().getTime().toString(),
        });
      }
    },
    editFolder(state, { payload }) {
      const parentIdx = state.folders.findIndex(
        (fol) => fol.id === payload.parentId
      );
      parentIdx > -1
        ? (state.folders[parentIdx].secondaryFolder = state.folders[
            parentIdx
          ]?.secondaryFolder.map((nested) =>
            nested.id === payload.id ? payload : nested
          ))
        : (state.folders = state.folders.map((folder) => {
            return folder.id === payload.id ? payload : folder;
          }));
      state.activeFolder = state.activeFolder.parentId
        ? state.folders
            .find((fol) => fol.id === state.activeFolder.parentId)
            .secondaryFolder.find((sec) => (sec.id = state.activeFolder.id))
        : state.folders.find((fol) => fol.id === state.activeFolder.id);
    },
    editPass(state, { payload }) {
      if (state.activeFolder.parentId) {
        const idx = state.folders.findIndex(
          (e) => e.id === state.activeFolder.parentId
        );
        const idx2 = state.folders[idx].secondaryFolder.findIndex(
          (el) => el.id === state.activeFolder.id
        );
        const idx3 = state.folders[idx].secondaryFolder[
          idx2
        ].passwords.findIndex((p) => p.id === payload.id);
        state.folders[idx].secondaryFolder[idx2].passwords[idx3] = payload;
      } else {
        const idx = state.folders.findIndex(
          (el) => el.id === state.activeFolder.id
        );
        const idx2 = state.folders[idx].passwords.findIndex(
          (p) => p.id === payload.id
        );
        state.folders[idx].passwords[idx2] = payload;
      }
      const idp = state.activeFolder.passwords.findIndex(
        (pas) => pas.id === payload.id
      );
      state.activeFolder.passwords[idp] = payload;
    },
    show(state) {
      state.showChapter = !state.showChapter;
    },
    reset(state) {
      state.showChapter = false;
    },

    activeF(state, { payload }) {
      state.activeFolder = payload;
      state.activePass = {};
    },
    setFolderOnEdit(state, { payload }) {
      state.folderOnEdit = payload;
    },
    resetFolderOnEdit(state) {
      state.folderOnEdit = null;
    },
    setPasswordOnEdit(state, { payload }) {
      state.passOnEdit = payload;
    },
    resetPasswordOnEdit(state) {
      state.passOnEdit = null;
    },
    setActivePass(state, { payload }) {
      state.activePass = payload;
    },
    addPasword(state, { payload }) {
      if (state.activeFolder.parentId) {
        const idx = state.folders.findIndex(
          (e) => e.id === state.activeFolder.parentId
        );
        const idx2 = state.folders[idx].secondaryFolder.findIndex(
          (el) => el.id === state.activeFolder.id
        );
        state.folders[idx].secondaryFolder[idx2].passwords.push({
          ...payload,
          id: new Date().getTime().toString(),
        });
      } else {
        const idx = state.folders.findIndex(
          (el) => el.id === state.activeFolder.id
        );
        state.folders[idx].passwords.push({
          ...payload,
          id: new Date().getTime().toString(),
        });
      }
    },
    addAccess(state, { payload }) {
      payload.forEach((element) => {
        state.activeFolder.access.push({ ...element });
      });
    },
    delAccess(state, { payload }) {
      state.activeFolder.access = state.activeFolder.access.filter(
        (ac) => ac.id !== payload
      );
    },
  },
});

export const selectAddEditFolder = (state) => state.AddEditFolder;
export const selectActiveFolder = (state) => state.AddEditFolder.activeFolder;
export const selectActivePass = (state) => state.AddEditFolder.activePass;
export const selectFolderOnEdit = (state) => state.AddEditFolder.folderOnEdit;
export const selectpassOnEdit = (state) => state.AddEditFolder.passOnEdit;

export const {
  addFolder,
  editFolder,
  editPass,
  show,
  reset,
  activeF,
  setFolderOnEdit,
  resetFolderOnEdit,
  setPasswordOnEdit,
  resetPasswordOnEdit,
  setActivePass,
  addPasword,
  addAccess,
  delAccess,
} = AddEditFolderSlice.actions;

export const AddEditFolderReducer = AddEditFolderSlice.reducer;
