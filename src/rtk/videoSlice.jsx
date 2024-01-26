import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videoList: null,
  },
  reducers: {
    addYoutubeVideo: (state, action) => {
      state.videoList = action.payload;
    },
  },
});

export const { addYoutubeVideo } = videoSlice.actions;

export default videoSlice.reducer;
