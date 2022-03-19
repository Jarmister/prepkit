const authInterceptor =
  ({ store }) =>
  (config) => {
    const conf = config;
    if (!(conf.meta && conf.meta.noAuth)) {
      const tokens = store.getters['auth/getTokens'];
      const authToken = tokens.guest || tokens.API;
      conf.headers.Authorization = `Bearer ${authToken}`;
    }
    return conf;
  };

export default authInterceptor;
