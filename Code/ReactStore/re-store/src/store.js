import {createStore, compose, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import reducer from "./reducers"

// Enhancer
// const stringEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args)
//     const originalDispatch = store.dispatch
//     store.dispatch = (action) => {
//         if (typeof action === 'string') {
//             return originalDispatch({
//                 type: action
//             })
//         }
//         return originalDispatch(action)
//     }
//     return store
// }
// const logEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args)
//     const originalDispatch = store.dispatch
//     store.dispatch = (action) => {
//         console.log(action.type)
//         return originalDispatch(action)
//     }
//     return store
// }
// Middleware
const logMiddleware = ({getState, dispatch}) => (next) => (action) => {
    console.log(action.type, getState())
    return next(action)
}

const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}
// const store = createStore(reducer, compose(
//     stringEnhancer, logEnhancer
// ))
// const store = createStore(reducer, applyMiddleware(
//     stringMiddleware,
//     logMiddleware
// ))
// const store = createStore(reducer)
const store = createStore(reducer, applyMiddleware(
    thunkMiddleware,
    stringMiddleware,
    logMiddleware
))
// thunkMiddleware
// const myAtction = (dispatch) => {
//     setTimeout(() => dispatch({
//         type: 'DELAYED_ACTION'
//     }), 2000)
// }
// const delayedActionCreator = (timeout) => (dispatch) => {
//     setTimeout(() => dispatch({
//         type: 'DELAYED_ACTION'
//     }), timeout)
// }
// store.dispatch(delayedActionCreator(3000))


export default store