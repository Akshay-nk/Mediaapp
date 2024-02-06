import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { addTohistory, deleteVideo } from '../services/allAPI';



function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =  async ()=>
   {setShow(true);

  //make api to call http://localhost:4000/hisory

  const {caption,embedLink}=displayData
  let today=new Date()

  let timeStamp=(new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',
  hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today))

  let videoDetails={
    caption,embedLink,timeStamp
  }
  await addTohistory(videoDetails)
}






  const removevideo=async(id)=>{
    //make api call
    const responce=await deleteVideo(id)
    setDeleteVideoStatus(true)
    
  }

  const dragStarted=(e,id)=>{
    console.log("drag started...Card Id:",id)
    e.dataTransfer.setData("videoId", id);
    
  }

  return (
    <>
    <Card style={{ width: '15rem' }} className='mt-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img height={'150px'} variant="top" onClick={handleShow} src={displayData.url} className='mt-3' />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
         <h6> {displayData?.caption}</h6>
        {insideCategory?"": <button onClick={()=>removevideo(displayData?.id)}><i class="fa-solid fa-trash"></i></button>}
        </Card.Title>
        
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="250px" src={`${displayData?.embedLink}?autoplay=1`} title={displayData.caption} frameborder="0" allow="accelerometer; autoplay;
         clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default VideoCard

//const removevideo=async(id)=>{
  //make api call
  //const responce=await deletevideo(id)
  //setDeleteVideoStatus(true)
  
//}

//button 
//<button onClick={(=>removevideo(displayData?.id))}>