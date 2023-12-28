import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  todoData: [],
  editData: {
    status: false,
    id: null,
    title: null,
    description: null,
  },
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      console.log(action.payload, "");
      state.isLogged = action.payload;
    },
    userLogout: (state, action) => {
      state.isLogged = action.payload;
    },
    addTodoData: (state, action) => {
      state.todoData = action.payload;
    },
    editTodoData: (state, action) => {
      state.editData = {
        status: true,
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
      };
    },
    editDefaultData: (state, action) => {
      state.editData = {
        status: "",
        id: "",
        title: "",
        description: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  userLogin,
  userLogout,
  addTodoData,
  editTodoData,
  editDefaultData,
} = counterSlice.actions;

export default counterSlice.reducer;
