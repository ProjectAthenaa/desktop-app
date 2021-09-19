import { configureStore } from '@reduxjs/toolkit';
import { reducer as tasksReducer } from './tasks';
import { reducer as profilesReducer } from './profiles';
import { reducer as accountsReducer } from './accounts';
import { reducer as proxiesReducer } from './proxies';
import { reducer as notificationsReducer } from './notifications';
import { reducer as settingsReducer } from './settings';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    profiles: profilesReducer,
    accounts: accountsReducer,
    proxies: proxiesReducer,
    notifications: notificationsReducer,
    settings: settingsReducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
