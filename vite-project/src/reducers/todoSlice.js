import { createSlice } from "@reduxjs/toolkit";
import { AddTodo, EditTodo, ForDelete, GetTodo, SearchTodo } from "../api/todoApi";

const initialState = {
  data: [],
  search: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetTodo.pending, (state) => {
        // Pending state
      })
      .addCase(GetTodo.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(GetTodo.rejected, (state, action) => {
        console.error("Error", action.error);
      })

      .addCase(SearchTodo.fulfilled, (state, action) => {
        state.data = action.payload;
      })

      .addCase(ForDelete.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.meta.arg);
      })

      .addCase(AddTodo.fulfilled, (state, action) => {
        // Добавляем новый элемент в массив данных
        state.data.push(action.payload);
      }).addCase(EditTodo.fulfilled, (state, action) => {
        // Обновляем отредактированный элемент
        state.data = state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
  },
});

export const { setSearch } = todoSlice.actions;
export default todoSlice.reducer;
