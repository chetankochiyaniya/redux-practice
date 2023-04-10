import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

const valFalse = 'setFalse'
const valTrue = 'setTrue'

const reducer = (state = { check: true }, action)=>{
    switch(action.type){
        case valFalse :
            return {...state, check : false}
        case valTrue :
            return {...state, check : true} 
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(logger.default));

const makeFalse =()=>({type:valFalse})
const makeTrue =()=>({type:valTrue})


store.subscribe(()=> {
    console.log("------------------------------",store.getState())
})

store.dispatch(makeFalse())
store.dispatch(makeTrue())