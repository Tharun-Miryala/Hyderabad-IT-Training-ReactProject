import React from 'react'
import desk_1 from './photos/DESK1.jpg'
import desk_2 from './photos/desk2.jpg'
import desk_3 from './photos/desk3.jpg'


const Slide = () => {
  return (
    <div className='container-fluid p-0'>
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img src={desk_1} className='w-100 d-block' alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img src={desk_2} className='w-100' alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img src={desk_3} className='w-100' alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselId" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselId" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
  )
}

export default Slide