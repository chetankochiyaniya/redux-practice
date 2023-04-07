import { createStore } from 'redux'

// store
const store = createStore(reducer)

//reducer funation
function reducer(state={amount:1},action){
    if(action.type==='increment'){
    
        // if you write like : 
        // state.amount = state.amount + 1;  
        // mutability - >  it will direct change current object ,and it will change previous state: [{amout:2}], next: [{amout:3},{amout:3}] it will change previous value also, so don't use it
    
        //immutability
        // it will create copy of object , in here it like : [{amout:2}], next: [{amout:2},{amout:3}] it will not chage previous value it generate copy and than store
        return {amount: state.amount + 1}
    }
    return state
}

let history=[]

// subscribe method runs after every state change or reducer change or after dispatch
store.subscribe(()=>
{
    history.push(store.getState())
    console.log(history)
})


setInterval(()=>{
// event handle 
store.dispatch({type:'increment'})
},5000)
