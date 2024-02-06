import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideo } from '../services/allAPI'


function View({uploadVideoServerResponse}) {

  const [deletevideoStatus,setDeleteVideoStatus]=useState(false)

  const [allVideos,setAllVideos]=useState([])

  const getAllUploadVideos= async ()=>{
    const {data} = await getAllVideo()
    setAllVideos(data)
    console.log(data);
  }
 

  useEffect(()=>{
    getAllUploadVideos()
    setDeleteVideoStatus()
  },[uploadVideoServerResponse,deletevideoStatus])


  
  return (
    <>
    <Row>
{
      allVideos.length>0?
      allVideos.map((video)=>(
      <Col sm={12} md={4} lg={3} xlg={3}>
      <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus} />
      </Col>)):<p>Nothing to display</p>
      }

    </Row>
    
    
    
    
    
    </>
  )
}

export default View

//const [deletevideoStatus,setDeleteVideoStatus]=useState(false)