import React, { useState } from 'react'
import { Button, Modal,Form} from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';




function Add({setUploadVideoServerResponse}) {



const [video,setVideo]=useState({
 id:"",caption:"",url:"",embedLink:""
})

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink=(e)=>{
    const {value}=e.target
    if(value)
    {
      const link =`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedLink:link})
    }
    else{
      setVideo({...video,embedLink:""})
    }
  }

  const handleUpload = async()=>{
    const {id,caption,url,embedLink} =video
    if(!id||!caption||!url||!embedLink){
      alert("please fill the missing fields")
    }
    else{
      //make api call
      const response= await uploadVideo(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        alert(`${response.data.caption} video uploaded`)
        //server response
        setUploadVideoServerResponse(response.data)
      //reset code

      setVideo({
        id:"",caption:"",url:"",embedLink:""
    })
        
        //hide modal
        handleClose()
      }
      else{
        console.log(response);
        alert("someting went wrong")
      }
    }
  }

//console.log(video);

  return (
    <>
    <div className='d-flex align-items-center '>
      <h5>Upload Videos</h5>
      <button className='btn' onClick={handleShow}><i class="fa-solid fa-circle-plus fa-beat-fade"></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>fill the following fields</p>
         <Form>
         <Form.Group className="mb-3">
        
        <Form.Control placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3">
        
        <Form.Control placeholder="Enter Video Title" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3">
        
        <Form.Control placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3">
        
        <Form.Control placeholder="Enter Video Link" onChange={getEmbedLink} />
      </Form.Group>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
     
    </>
  )
}

export default Add

//reset video
//setvideo({ id:"",caption=:""............ })


