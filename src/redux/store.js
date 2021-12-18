import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getFromAsyncStorage } from '../utils';

let state = {};
getFromAsyncStorage('user').then((userData) => {
  if (userData) {
    state['userReducer'] = {}
    state['userReducer']['userLogin'] = {
      isLoading: false,
      isFetched: false,
      isFailed: false,
      isSuccess: false,
      error: null,
    };
    state['userReducer']['userLogin']['data'] = userData;
  }
});

const middlware = [thunk, logger];

const store = createStore(
  rootReducer,
  state,
  compose(applyMiddleware(...middlware))
)

export default store;