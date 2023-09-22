import {compose, createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger' //And this logger is essentially something that allows us to see what the state looks like before an action
//is dispatched, what the action is, and then how the state in turn, looks after the action.




import {RootReducer} from './root.reducer' 



const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  console.log(store);
    if (!action.type) {
      return next(action);
    }
  
    // console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());
  
    next(action);
  
    console.log('next state: ', store.getState());
  };


const middelware=[loggerMiddleware]

const compose_enhancer=compose(applyMiddleware(...middelware))

export const Store=createStore(RootReducer, ['Use Redux'], compose_enhancer)// it will be keep three peramete 

