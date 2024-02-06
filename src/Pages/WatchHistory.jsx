import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistory ,deleteHistory} from '../services/allAPI'


function WatchHistory() {

  const [history,setHistory]=useState([]);

 const handleHistory = async ()=>{
  //make api call 
  const{data} = await getAllHistory()
  setHistory(data)

 }

 console.log(history);

 useEffect(()=>{
  handleHistory();
 },[])

 const handleDeletHistory=async(id)=>{
  //make api call
  deleteHistory(id)
  //return remaining api
  handleHistory()
 }


  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <h4 style={{color:'white'}}>Watch history</h4>
      <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px',color:'white'}}><i class="fa-solid fa-arrow-left"></i>Back to Home</Link>
    </div>


    <table className='table mt-5 mb-5 container '>

      <thead style={{color:'white'}}>
        <th>#</th>
        <th>Name</th>
        <th>URL</th>
        <th>TimeStamp</th>
        <th>Action</th>
      </thead>

      <tbody style={{color:'white'}}>
       { 
        history?history?.map((item,index)=>(

<tr key={item?.id}>
        <td >{index+1}</td>
        <td>{item?.caption}</td>
        <td><a href={item?.embedLink} target='_blank'>{item.embedLink} </a></td>
        <td>{item?.timeStamp}</td>
        <td><button className='btn' onClick={()=>handleDeletHistory(item?.id)}><i class="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
        )):<p>Nothing to display</p>
       
       }

      </tbody>

    </table>
    
    
    </>
  )
}

export default WatchHistory