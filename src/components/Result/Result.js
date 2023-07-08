import React, { useEffect } from 'react'
import './Result.css';
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { resetResultAction } from '../../redux/ResultReducer';
import { resetAllAction } from '../../redux/questionReducer';
import { attempts_Number, earnedPoints, flagResult } from '../../helper/helper';
import { usePublishResult } from '../../hooks/setResult';



const Result = () => {

  const {question : {queue,answers},result:{result,userId}} = useSelector(state=>state)


   const totalPoints = queue.length * 10;
   const attempts = attempts_Number(result);
   const EarnedPoints = earnedPoints(result,answers,10);

   const flag  = flagResult(totalPoints,EarnedPoints)
 
   // store  user result 
    usePublishResult({result,username:userId,attempts,points:EarnedPoints,achived: flag ? "PASSED" : "FAILED"});

  const dispatch = useDispatch();
const onRestart = () => {
        dispatch(resetAllAction());
        dispatch(resetResultAction());

}

  return (
    <div className='container'>
      <div className='result-m'>
       <div className='result'>

           <div className='user-score'>
                <div className='user-score-d'>
                <h1 className='user-score-n'>{EarnedPoints || 0}</h1>
                <h1 className='user-score-s' style={{color : `${flag? "#2aff95" : "#ff2a66"}`}}>{flag ? "PASSED" : "FAILED"}</h1>   
                </div>

              <div className='user-score-d2'>  
                </div>
               <div className='user-score-d1'>
                </div>  
            </div>
            <div className='result-data'>

               <div className='result-data-full'>
                  <div className='data'>
                    <span className='data-v'>{userId}</span><br/>
                    <span className='data-d'>Username</span>
                  </div>

                  <div className='data'>
                    <span className='data-v'>{totalPoints || 0}</span><br/>
                    <span className='data-d'>Total Quiz Points</span>
                  </div>

               </div>


               <div className='result-data-full'>
                  <div className='data'>
                    <span className='data-v' style={{color : "#2aff95"}}>{queue.length || 0}</span><br/>
                    <span className='data-d'>Total Questions</span>
                  </div>
                  
                  <div className='data'>
                    <span className='data-v' style={{color : "#2aff95"}}>{attempts || 0}</span><br/>
                    <span className='data-d'>Total questions Attempted</span>
                  </div>

               </div>
              
            </div>
            
       </div>
       </div>

       <div className='start'>
          <Link className='btn btn-r' to={'/'} onClick={onRestart}>Try Again</Link>
       </div>


       <div className='container'>
         <ResultTable/>
       </div>

    </div>
  )
}

export default Result