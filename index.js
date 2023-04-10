/**
 * for jason-sever , it work like rest api 
 * npx json-server --watch db.json --port 3000
 */

import axios from 'axios'
import { createStore ,applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//Async API call
// async function getUser(){
//     const {data} =  await axios.get(' http://localhost:3000/accounts/1')
//     console.log("data",data);
// }
// getUser()

//action name const 
const init = 'account/init' // domain , model -> define schema/varibale that repsenant particular value.
const inc = 'account/increment'
const dec = 'account/decrement'
const incByAmount = 'account/incrementByAmount'
const getUserPending = 'account/getUser/pendding'
const getUserFullfilled = 'account/getUser/fulfilled'
const getUserRejected = 'account/getuser/rejected'
const incBonus = "bonus/increment"

//logger is just use for log that give prev state, action and next state
// store
const store = createStore(
    // combine method for reducers
    combineReducers({
        account: accountReducer,
        bonus: bonusReducer
    })
    ,applyMiddleware(logger.default,thunk.default))
let history=[]

//reducer funation

// if you write like : 
// state.amount = state.amount + 1;  
// mutability - >  it will direct change current object ,and it will change previous state: [{amout:2}], next: [{amout:3},{amout:3}] it will change previous value also, so don't use it
    
//immutability
// it will create copy of object , in here it like : [{amout:2}], next: [{amout:2},{amout:3}] it will not chage previous value it generate copy and than store

function accountReducer(state={amount:0},action){
    switch(action.type){
        case init: 
        return {amount: action.payload}
        case inc:
            return {amount: state.amount + 1}
        case dec:
            return {amount: state.amount - 1}
        case incByAmount:
            return {amount: state.amount + action.payload}
        case getUserFullfilled:
            return { amount: action.payload, pending:false };
        case getUserRejected:
            return {...state, error:action.error, pending:false  };
        case getUserPending:
            return { ...state,pending:true };
        default:
            return state
    }
}
// multiple reducer's 
function bonusReducer (state = { points:0},action){
    switch (action.type){
        case incByAmount:
            if(action.payload >=100)
                return {points: state.points + 1}
        case incBonus:
            return {points: state.points + 1}
        default:
            return state
    }
}


// subscribe method runs after every state change or reducer change or after dispatch
// store.subscribe(()=>
// {
//     history.push(store.getState())
//     console.log(history)
// })

// Action Creators
// Action must be plain objects.
function getUser(id) {
    return async (dispatch, getState) => {
      try{
          dispatch(getAccountUserPending());
          const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
          dispatch(getAccountUserFulFilled(data.amount));
      } catch(error){
          dispatch(getAccountUserRejected(error.message));
      }
     
    };
  }

// Action must be plain objects.

function initUser(value){
    // Action must be plain objects.
    return {type:init,payload:value}
} 
function increment(){
return {type: inc}
}
function decrement(){
return {type:dec}
}
function incrementByAmount(value){
return {type:incByAmount,payload:value}
}

function incrementBonus(value){
    return {type:incBonus}
    }

    function getAccountUserFulFilled(value) {
        return { type: getUserFullfilled, payload: value };
      }
      function getAccountUserRejected(error) {
          return { type: getUserRejected, error: error };
      }
        function getAccountUserPending() {
          return { type: getUserPending };
      }
      


setTimeout(() => {
  store.dispatch(getUser(2));
// store.dispatch(incByAmount(200))
// store.dispatch(incBonus());
}, 2000);


// three principal 1) store should be golbal  (only 1 store) 2) immutable state 2) reducer funaction should be pure

