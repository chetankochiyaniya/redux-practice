import { createStore } from 'redux'

// store
const store = createStore(reducer)

//reducer funation
function reducer(state={amount:1},action){
    if(action.type==='increment'){
    
        // if you write like : 
        // state.amount = state.amount + 1;  
        // mutability - >  it will direct change current object ,and it will change previous state, so don't use it
    
        //immutability
        // it will create copy of object
        return {amount: state.amount + 1}
    }
    return state
}

// gobal state => check current value of state
console.log(store.getState());

// subscribe method runs after every state change or reducer change or after dispatch
store.subscribe(()=>console.log(store.getState()))


// event handle 
store.dispatch({type:'increment'})