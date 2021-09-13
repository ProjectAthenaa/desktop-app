import Store from 'electron-store';

// Local storage initialization
const store = new Store({
  defaults: {
    preferences: {},
    token: null,
    sessionId: null,
    modules: [],
  }
});

export default store;
