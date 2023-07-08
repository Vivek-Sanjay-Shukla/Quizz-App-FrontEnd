// fectch question hook to fecth api data and set value to the store
import {useDispatch} from 'react-redux'
import { useEffect, useState } from "react"

import * as Action from '../redux/questionReducer'
import { getServerData } from '../helper/helper';

export const useFetchQuestion = () => {

      const dispatch = useDispatch();
      const [getData, setGetData] = useState({isLoading:false,apiData:[],serverError:null});
  
  

      useEffect(()=>{
        setGetData(prev=>({...prev,isLoading:true}));

        //async function to fetch  data from data.js
         
          (async () => {
              try{
                const [{questions,answers}] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,(data)=>data)
                //  console.log({questions,answers});
                if(questions.length > 0){
                    setGetData(prev=>({...prev,isLoading:false}));
                    setGetData(prev=>({...prev,apiData:questions}));

                    // dispatch an action
                     dispatch(Action.startExamAction({question:questions,answers}))

                }else{
                    throw new Error("No question available");
                }
              }catch(err){
                setGetData(prev=>({...prev,isLoading:false}));
                setGetData(prev=>({...prev,serverError:err}));
                  
              }
          })(); 
      },[dispatch])

      return [getData,setGetData]
}


// movenextaction dispatch function

export const MoveNextAction = () => async (dispatch) =>{
  try{
     dispatch(Action.moveNextAction())
  }catch(err){
    console.log(err);
  } 
}

// moveprevaction dispatch function

export const MovePrevAction = () => async (dispatch) =>{
  try{
     dispatch(Action.movePrevAction())
  }catch(err){
    console.log(err);
  }
}