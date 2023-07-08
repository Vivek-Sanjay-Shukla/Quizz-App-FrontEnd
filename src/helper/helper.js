import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios';


export const attempts_Number = (result) =>{
     return result.filter(r => r!==undefined).length;
}

export const earnedPoints = (result,answers,point) =>{
    
   return result.map((ele,i)=> answers[i]===ele).filter(i=>i).map(i=>point).reduce((prev,curr)=>prev+curr,0)
}

export const flagResult = (totalPoints,EarnedPoints) =>{
        return (totalPoints*50/100)< EarnedPoints;
}

// check use auth

export const CheckUserExist = ({children}) => {
     const auth = useSelector(state=> state.result.userId)
     return auth ? children : <Navigate to = {'/'} replace={true}></Navigate>
}


// get server data 

 export const getServerData = async (url,callback) => {
     // this will resturn the object in which you will have all the details
     const data = await (await axios.get(url))?.data;
     
     return callback ? callback(data) : data;
 }


 //post server data

 export const postServerData = async (url,result,callback) => {
     // this will resturn the object in which you will have all the details
     const data = await(await axios.post(url,result))?.data;
     
     return callback ? callback(data) : data;
 } 

