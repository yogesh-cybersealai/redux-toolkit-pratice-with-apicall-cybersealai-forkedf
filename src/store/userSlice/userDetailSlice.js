import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createuser = createAsyncThunk('createuser',async (payload,{rejectWithValue})=>{
    const response = await fetch('https://64bcbc2c7b33a35a44474ba7.mockapi.io/CRUD-API',
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        });
    try {
        const res = await response.json()
        console.log('res',res)
        return res;
    } catch (error) {
        return rejectWithValue(error.response);
    }
})
export const getAllusers = createAsyncThunk('getAllusers',async (payload,{rejectWithValue})=>{
    const response = await fetch('https://64bcbc2c7b33a35a44474ba7.mockapi.io/CRUD-API',
        {
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        });
    try {
        const res = await response.json()
        console.log('res',res)
        return res;
    } catch (error) {
        return rejectWithValue(error.response);
    }
})
export const deleteUser = createAsyncThunk('deleteUser',async (payload,{rejectWithValue})=>{
    const response = await fetch(`https://64bcbc2c7b33a35a44474ba7.mockapi.io/CRUD-API/${payload}`,
        {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
        });
    try {
        const res = await response.json()
        console.log('res',res)
        return res;
    } catch (error) {
        return rejectWithValue(error.response);
    }
})
export const updateUser = createAsyncThunk('updateUser',async (payload,{rejectWithValue})=>{
    const response = await fetch(`https://64bcbc2c7b33a35a44474ba7.mockapi.io/CRUD-API/${payload.id}`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        });
    try {
        const res = await response.json()
        console.log('res',res)
        return res;
    } catch (error) {
        return rejectWithValue(error.response);
    }
})

export const userDetail = createSlice({
    name:'userDetail',
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    extraReducers:{
        [createuser.pending]:(state)=>{
            state.loading=true;
        },
        [createuser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users.push(action.payload);
        },
        [createuser.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
        [getAllusers.pending]:(state)=>{
            state.loading=true;
        },
        [getAllusers.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users = action.payload;
        },
        [getAllusers.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
        [deleteUser.pending]:(state)=>{
            state.loading=true;
        },
        [deleteUser.fulfilled]:(state,action)=>{
            state.loading=false;
            const {id}=action.payload;
            state.users = state.users.filter((i)=>i.id!==id)
        },
        [deleteUser.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
        [updateUser.pending]:(state)=>{
            state.loading=true;
        },
        [updateUser.fulfilled]:(state,action)=>{
            state.loading=false;
            const index = state.users.findIndex((user) => user.id === action.payload.id);
            if (index !== -1) {
            // Update the user in the state with the new data
            state.users[index] = action.payload;
            }
        },
        [updateUser.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
    }
})


export default userDetail.reducer