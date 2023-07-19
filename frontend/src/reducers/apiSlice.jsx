import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchApi = createAsyncThunk(
    "api/fetchApi",
    async (page) => {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5051/api/user?page="+ page,{
            headers: {
                Authorization: `Bearer ${token}`,
            },

        });
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
    totalPages: 0,
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
        postLogin: (state, action) => {
            state.data = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchApi.pending, (state, action) => {
            state.loading = true;
        }
        );
        builder.addCase(fetchApi.fulfilled, (state, action) => {
            state.data = action.payload.user;
            console.log(action.payload);
            state.totalPages = action.payload.totalPages;
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

export const { setAuthor,postLogin } = apiSlice.actions;
export default apiSlice.reducer;





