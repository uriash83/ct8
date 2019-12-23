import React from 'react';


const Content = () => {
    return(
        <div className="container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="5000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="img-fluid d-block container-flui" src="img/DSC_6003.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid d-block container-flui" src="img/DSC_5881.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid d-block container-fluid" src="img/DSC_8205.jpg" alt="Third slide"/>
                    </div>
                </div>
            </div>
        </div>
            
           
    );
}

export default Content;