import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MoveNextAction, MovePrevAction } from '../../hooks/FetchQuestions';
import { PushAnswer } from '../../hooks/setResult';
import Questions from './Questions';
import './Quiz.css';
import {Navigate} from 'react-router-dom'

// redux store import

const Quiz = () => {

  const [check, setcheck] = useState(undefined);
 const state  = useSelector(state => state)  

 //result array
 const result = useSelector(state => state.result.result)  

 // trace value anf queue array
 const {trace,queue} = useSelector(state => state.question)  

 const dispatch = useDispatch();

 const onChecked = (check) => {
  setcheck(check);
}

/* this event is fired when we click on the next button */
  const onNext = () => {
    // move to nex question by increasing trace
     dispatch(MoveNextAction())
     
     //insert a new result in ans array
      if(result.length<=trace){
        dispatch(PushAnswer(check))
      }

      // reset the value of the checked variable
      setcheck(undefined)
  }


/* this event is fired when we click on the prev button */
  const onPrev = () => {
    dispatch(MovePrevAction())
  }

  
  // finish exam after the last question
  if(result.length && result.length>=queue.length){
    return <Navigate to={'/result'} replace={true}></Navigate>
  }


  return (
    <div className='container'>
       <h1 className='title light'>Quiz App</h1>
        
        {/* questions */}
        <Questions onChecked={onChecked}/>


        <div className='grid'>
          {trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
          <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

export default Quiz