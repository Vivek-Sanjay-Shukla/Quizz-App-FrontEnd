

import {combineReducers, configureStore} from '@reduxjs/toolkit'

// call reducers
import  questionReducer  from './questionReducer'
import  ResultReducer from './ResultReducer'

const rootReducer = combineReducers({
    question : questionReducer,
    result : ResultReducer,
})

// create store with reducer

export default configureStore({reducer:rootReducer})