import React from 'react'

const Project = () => {
    return (
        <div className="container">
            <div className="row">
                <h3 className='text-center text-decoration-underline m-4'>Projects</h3>
                <div className="col">
                    <div class="card" style={{width:"18rem",height:"400px"}}>
                        <img src="https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Bridge Construction</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card" style={{width:"18rem", height:"400px"}}>
                        <img src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Home Construction</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card" style={{width:"18rem", height:"400px"}}>
                        <img src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Interior Design</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project