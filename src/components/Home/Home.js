import React, { useRef } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserId } from '../../redux/ResultReducer';
import Quiz from '../Home/quiz.png'

const Home = () => {

  // this is to get the username of the user from the intput 
  const user = useRef(null);
 
  const dispatch = useDispatch();

   const startQuiz = () =>{
        if(user.current?.value){
            // this will store the username of the user
            dispatch(setUserId(user.current?.value));
        }
   }

  return (
    <div className='container'>
      <div className='quiz-img-s'>
      <img src ={Quiz} atl="quiz-img" className='quiz-img'/>
      </div>
      <h1 className='title light'>Quiz App</h1>

       <ul>
          <li>You will be asked 10 questions.</li>
          <li>10 points is given for each correct answer.</li>
          <li>Each question has four options. You have to choose one option.</li>
          <li>You can go to prev question and change the answer.</li>
          <li>You will be able to see rank at the end.</li>         
       </ul>
        
       <form id = 'form'>
          <input ref={user} className="user" type="text" placeholder='Enter your Name'/>
       </form> 
 
       <div className='start'>
          <Link className='btn btn-h' to={'/quiz'} onClick={startQuiz}>Play Now</Link>
       </div>   

    </div>
  )
}

export default Home