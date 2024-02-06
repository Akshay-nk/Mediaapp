import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Row,Col } from 'react-bootstrap';

import { addToCategory ,getAllCategory,deleteCategory, getAVideo, updateCategory} from '../services/allAPI';
import VideoCard from './VideoCard';



function Category() {

  const [categoryName,setCategoryName]=useState("")
  const [categories,setCategories]=useState([])


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory=async()=>{
     
     if(categoryName){
      let body={
        categoryName,allVideos:[]
      }
      const response=await addToCategory(body)
      console.log(response)
      if(response.status>=200 && response.status<300){
        //hide modal
        handleClose()
        //reset
        setCategoryName('')
      }
      else{
        alert("Error in adding the category!")
      }
     }
     else{
      alert('Please enter a valid name')
     }
  }

  const getCategories=async()=>{
    const{data}=await getAllCategory()
    setCategories(data)
  }
  console.log(categories);

  useEffect(()=>{
    getCategories()
  },[])
  
  const handleDelete=async(id)=>{
    await deleteCategory(id)
    getCategories()
  }

  const gragOver=(e)=>{
    console.log("video drag over category");
    e.preventDefault();
    
  }

const videoDrop= async (e,categoryId)=>{
  console.log('video drop inside category id',categoryId);
  const videoId=e.dataTransfer.getData("videoId")
    console.log("video Card Id:",videoId);
    //get video details
  const {data}= await getAVideo(videoId)
  console.log(data);
  //get category details
  const selectedcategory=categories?.find(item=>item.id===categoryId)
  selectedcategory.allVideos.push(data)
  console.log(selectedcategory);

  //make api call to update

  await updateCategory(categoryId,selectedcategory)
  getCategories()
}



  return (
<>

<div className="d-grid ms-3">
<button className='btn btn-info' onClick={handleShow}>Add to Category</button>
</div>

{
  categories?categories?.map((item)=>(
   <div className='mt-5 mb-3 border rounded p-3 text-white' droppable onDragOver={(e)=>gragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
    <div className='d-flex justify-content-between align-items-center'>
       <h6>{item?.categoryName}</h6>
       <button className='btn' onClick={()=>handleDelete(item?.id)}>Delete</button>
    </div>

<Row>
  {
    item?.allVideos &&
    item?.allVideos.map(card=>(
      <Col sm={12}>
        <VideoCard displayData={card} insideCategory={true}/>
      </Col>
    ))
  }
</Row>


   </div>
  )):<p>Nothing to display</p>
}

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
         <Form>
         

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>Enter Video Name</Form.Label>
        
        <Form.Control placeholder="Enter Video Name" onChange={(e)=>setCategoryName(e.target.value)} />
      </Form.Group>

      
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>


</>
    )
}

export default Category