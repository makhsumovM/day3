import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api ="https://66a27283967c89168f2022db.mockapi.io/Api/v1/Users"

export const GetTodo = createAsyncThunk("todo/GetTodo",async()=>{
    try {
        const {data} = await axios.get(api);
        return data;
    } catch (error) {
        console.error(error);
    }
})

export const SearchTodo = createAsyncThunk("todo/SearchTodo",async(search)=>{
    try {
        const {data} = await axios.get(`${api}?Name=${search}`);
        return data;
    } catch (error) {
        console.error(error)
    }
})

export const ForDelete = createAsyncThunk("todo/ForDelete",async(id)=>{
    try{
        await axios.delete(`${api}/${id}`);
        console.log("Deleted");
    }
     catch (error) {
        console.error(error)
    }
})



export const AddTodo = createAsyncThunk("todo/AddTodo", async (newItem) => {
    try {
      const { data } = await axios.post(api, newItem);
      return data;
    } catch (error) {
      console.error(error);
    }
  });



  export const EditTodo = createAsyncThunk("todo/EditTodo", async ({ id, updatedItem }) => {
    try {
      const { data } = await axios.put(`${api}/${id}`, updatedItem);
      return data;
    } catch (error) {
      console.error(error);
    }
  });