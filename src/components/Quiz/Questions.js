import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

//custom hook

import { useFetchQuestion } from '../../hooks/FetchQuestions';
import { updateResult } from '../../hooks/setResult';

const Questions = ({onChecked}) => {

  const [checked, setChecked] = useState(false);
  const [{isLoading,apiData,serverError}] = useFetchQuestion();
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(updateResult({trace,checked}))  
  },[checked]);

  const onSelect = (i) =>{
    // setChecked(true);
    // console.log("radio");
    onChecked(i);
    setChecked(i)
  }

  // const question = data[0];
  const {trace} = useSelector(state=>state.question)
  const result = useSelector(state => state.result.result)  
  const state = useSelector(state => state)

   
  const questions  = useSelector(state => state.question.queue[state.question.trace])


  if(isLoading){
    return <h3 className='text-light'>isLoading</h3>
  }
 
  if(serverError){
    return <h3 className='text-light'>{serverError || "Unknown error"}</h3>
  }


  return (
    <div className='questions'>
      <h2 className='light'>{questions?.question}</h2>

      <ul key={questions?.id}>
        {
          questions?.options.map((q,i)=>(
            <li key={i}>
              <input 
                type="radio"
                value={true}
                name="options"
                id={`q${i}-option`}
                onChange={() => onSelect(i)}
              />
              <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
              <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>
          </li>
          ))
        }
      </ul>


    </div>
  )
}

export default Questions