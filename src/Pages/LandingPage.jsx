import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function LandingPage() {
 
  const navigate=useNavigate()

  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={6}>
          <h2 style={{ textAlign: 'justify' }}>Welcome To <span className='text-warning'>Media Player</span></h2>
          <p>free and open source cross-platform multimedia player and framework Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum reiciendis corporis a, eum magnam saepe porro? Ratione vitae minima numquam beatae deserunt
            that plays most multimedia files
            as well as DVDs, Audio CDs, VCDs, and various streaming protocols</p>
          <button onClick={()=>navigate('/home')} className=' mt-4 btn btn-info'>Get Started</button>
        </Col>
        <Col lg={4}>
          <img src="https://media.giphy.com/media/WFmjWifrj9DJ50YaXj/giphy.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>




      <div children=' align-items-center justify-content-between w-100 flex-column'>
        <h3 className='text-center text-primary my-5'>Features</h3>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100 ">

          <Card className='p-3 bg-light mx-5' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media.tenor.com/images/c899032d12f0a21239b7ee264c767904/tenor.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>


          <Card className='p-3 bg-light mx-5' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://phoneky.co.uk/thumbs/screensavers/down/music/musicplaye_9qcja2mc.gif" />
            <Card.Body>
              <Card.Title>Categerize Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>


          <Card className='p-3 bg-light mx-5' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://radio-limbo.nl/wp-content/uploads/2018/10/music_9qn-1.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
        </div>





      </div>


      <div className="container border-rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h4 className='text-warning mb-3'> Simple,Powerful & Fast</h4>
          <h6 className='mb-3'><span className='fs-5 text-warning '>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit
            . Dicta porro enim distinctio atque temporibus architecto sit vel, dolorum minima tempore eligendi ex iusto quisquam explicabo
            eveniet nam dignissimos mollitia quidem.</h6>

          <h6 className='mb-3'><span className='fs-5 text-warning '>Categerize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit
            . Dicta porro enim distinctio atque temporibus architecto sit vel, dolorum minima tempore eligendi ex i
            usto quisquam explicabo eveniet nam dignissimos mollitia quidem.</h6>

          <h6 className='mb-3'><span className='fs-5 text-warning '>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit
            . Dicta porro enim distinctio atque temporibus architecto sit vel, dolorum minima tempore eligendi ex iusto quisqua
            m explicabo eveniet nam dignissimos mollitia quidem.</h6>
        </div>

        <div className='video col-lg-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/W1Qa0idohvo?si=ucozYVF7hpilsTC1" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        </div>
      </div>




    </>
  )
}

export default LandingPage