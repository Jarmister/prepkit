// interceptor to catch errors
const errorInterceptor =
  ({ store, router, Sentry }) =>
  (error) => {
    // check if it's a server error
    if (!error.response) {
      store.dispatch('notify', {
        title: 'Network/Server error',
      });
      return Promise.reject(error);
    }

    // all the other error responses

    // all the other error responses
    switch (error.response.status) {
      case 400:
        console.error(error.response.status, error.message);
        console.log(error.response);
        store.dispatch('notify', {
          msg: error.response.data.message,
          title: 'Błąd',
        });
        break;

      case 403:
        console.error(error.response.status, error.message);
        console.log(error.response);
        store.dispatch('notify', {
          msg: error.response.data.message,
          title: 'Nie masz dostępu do tego zasobu',
        });
        break;

      case 401: // authentication error, logout the user
        if (!(error.config.meta && error.config.meta.noAuthError)) {
          store.dispatch('notify', {
            msg: 'Please login again',
            title: 'Session Expired',
          });
          store.commit('auth/clearTokens');
          if (!router.currentRoute.value.meta.doNotRedirectOnError) {
            router.push('/auth/login');
          }
        }
        break;

      default:
        console.error(error.response.status, error.message);
        store.dispatch('notify', {
          title: 'Network/Server error',
        });
    }
    Sentry.captureException(error);
    return Promise.reject(error);
  };

export default errorInterceptor;
