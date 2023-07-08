import React, { useEffect, useState } from 'react'
import { getServerData } from '../../helper/helper';

const ResultTable = () => {

    const [data, setData] = useState([]); 

    useEffect(() => {
        //gettting the results of the users
         getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,(res)=> {
            setData(res)
         });
    });

  return (
      <div className='result-table'>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td className='table-data-1'>Question Attempted</td>
                    <td>Earned Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            
            <tbody>
                {!data ?? <div>NO DATA FOUND</div>}
                {
                    data.map((val,i)=> (
                        <tr className='table-body' key={i}> 
                        <td>{val?.username || ''}</td>
                        <td className='table-data-1'>{val?.attempts || 0}</td>
                        <td>{val?.points || 0}</td>
                        <td>{val?.achived || 0}</td>
                       </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
  )
}

export default ResultTable