import Store from 'electron-store';

const store = new Store({
  defaults: {
    preferences: {},
    token: null,
    sessionId: null,
  }
});

export default store;
