import { Modal,Button} from 'react-bootstrap';
import React, {useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/";

const CardMovie =({title, poster_path, vote_average, release_date, overview})=>{
    
    const [show,setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(
        <div className="card text-center mb-3">
            <div className="card-body">
              <img className="card-img-top" src={API_IMG+poster_path} alt='' />
              <div className="card-body">
                  <button type="button" className="my-btn" onClick={handleShow} >View More</button>
                  <Modal  show={show} onHide={handleClose}>
                      <Modal.Header className='info-card' closeButton>
                        <Modal.Title className='info-card'></Modal.Title>
                      </Modal.Header>
                      <Modal.Body className='info-card'>
                      <img className="card-img"src={API_IMG+poster_path} alt='' />
                      <h3>{title}</h3>
                      <h4>IMDb: {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <h6> <b>Overview</b></h6>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer className='info-card'>
                          <Button className='my-btn' onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default CardMovie;