import { createStore ,applyMiddleware} from 'redux'
import logger from 'redux-logger'

//logger is just use for log that give prev state, action and next state
// store
const store = createStore(reducer,applyMiddleware(logger.default))

//reducer funation
function reducer(state={amount:0},action){
    if(action.type==='increment'){
    
        // if you write like : 
        // state.amount = state.amount + 1;  
        // mutability - >  it will direct change current object ,and it will change previous state: [{amout:2}], next: [{amout:3},{amout:3}] it will change previous value also, so don't use it
    
        //immutability
        // it will create copy of object , in here it like : [{amout:2}], next: [{amout:2},{amout:3}] it will not chage previous value it generate copy and than store
        return {amount: state.amount + 1}
    }
    if(action.type==='decrement'){
        return {amount: state.amount - 1}
    }
    
    if (action.type === 'incrementByAmount'){
        return {amount: state.amount + action.payload}
    }
    return state
}

let history=[]

// subscribe method runs after every state change or reducer change or after dispatch
// store.subscribe(()=>
// {
//     history.push(store.getState())
//     console.log(history)
// })


setInterval(()=>{
// event handle 
store.dispatch({type:'incrementByAmount',payload:5})
},5000)


// three principal 1) store should be golbal  (only 1 store) 2) immutable state 2) reducer funaction should be pure