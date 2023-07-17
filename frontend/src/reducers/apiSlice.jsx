import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchApi = createAsyncThunk(
    "api/fetchApi",
    async () => {
        const response = await fetch("http://localhost:5051/api/user");
        const data = await response.json();
        console.log(data);
        return data;
    }

);

export const postPost = createAsyncThunk(
    "api/postPost",
    async (post) => {
        try {
            console.log(post);
            const response = await fetch("http://localhost:5051/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);




const initialState = {
    data: [],
    loading: false,
    error: false,
}



const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        setAuthor: (state, action) => {
            state.data = action.payload;

        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApi.pending, (state, action) => {
            state.loading = true;
        }
        );
        builder.addCase(fetchApi.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        }
        );
        builder.addCase(fetchApi.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
        );
    }
},

);

export const { setAuthor } = apiSlice.actions;
export default apiSlice.reducer;





