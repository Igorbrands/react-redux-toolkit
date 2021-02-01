import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./modules/tasks/Tasks.store";
import themeReducer from "./modules/theme/Theme.store";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
