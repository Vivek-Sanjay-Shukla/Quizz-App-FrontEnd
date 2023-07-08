import { postServerData } from '../helper/helper';
import * as Action from '../redux/ResultReducer'

export const PushAnswer = (result) => async (dispatch) => {
       try{
        await dispatch(Action.pushResultAction(result))
       }catch(err){
        console.log(err);
       }
}

export const updateResult  = (index) => async (dispatch) =>{
       try{
        await dispatch(Action.updateResultAction(index))
       }catch(err){
           console.log(err);
       }
}

// insert user result
export const usePublishResult = (resultData) =>{
     const {result,username} = resultData;

     (async () =>{
          try{
             if(result !== [] && !username) throw new Error("Couldn't get result");

             await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,resultData,data=>data);
          }catch(err){
              console.log(err);
          }
     })(); 
}
