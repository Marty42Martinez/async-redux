import React from 'react';
import { render } from 'react-dom';
// import App from './components/App';
import { createStore, applyMiddleware } from 'redux';

const logger = store => next => action => {
  console.log('ACTION RECEIVED::', action.type);
  next(action);
};


function reducer(state = {}, action) {
  switch(action.type) {
    case 'TALKING':
      return { ...state, [action.type]: [action.payload] };
  }
}


const store = createStore(
  reducer,
  applyMiddleware(logger)
);

store.dispatch({
  type: 'TALKING',
  payload: 'Not sure what to do'
});
