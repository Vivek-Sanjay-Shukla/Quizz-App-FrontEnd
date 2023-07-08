import { createSlice } from "@reduxjs/toolkit"

// create reducer with initial value
export const questionReducer = createSlice({
     name:'questions',
     initialState:{
        queue:[],
        answers:[],
        trace: 0
     },
     reducers:{
        startExamAction : (state,action)=>{
            let {question,answers} = action.payload
            return{
                ...state,
                queue : question,
                answers
            }
        },
        moveNextAction : (state) => {
            return{
                ...state,  // we first get the previous state by using spread operator
               trace : Math.min(state.queue.length-1,state.trace+1)
            }
        },
        movePrevAction : (state) => {
            return{
                ...state,  // we first get the previous state by using spread operator
                trace : Math.max(0,state.trace-1)
            }
        },
        resetAllAction : () =>{
            return {
                queue:[],
                answers:[],
                trace: 0
            }
        }
     }
})

export const {startExamAction,moveNextAction,movePrevAction,resetAllAction} =  questionReducer.actions

export default questionReducer.reducer