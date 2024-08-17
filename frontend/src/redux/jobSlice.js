import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        allAdminJobs: [],
        singleJob: null,
        searchJobByText: "",
        allAppliedJobs: [],
        searchedQuery: "",
    },
    reducers: {
        // action to set all jobs
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setAllAdminJobs: (state, action) => {
            state.allAdminJobs = action.payload;
        },
        // action to set all admin jobs
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setSearchJobByText: (state, action) => {
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs: (state, action) => {
            state.allAppliedJobs = action.payload;
        },
        setSearchedQuery: (state, action) => {
            state.searchedQuery = action.payload;
        },
    },
});

export const {
    setAllJobs,
    setAllAdminJobs,
    setSingleJob,
    setSearchJobByText,
    setAllAppliedJobs,
    setSearchedQuery,
} = jobSlice.actions;

export default jobSlice.reducer;