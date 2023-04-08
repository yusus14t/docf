import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    return (
        <Carousel autoPlay={true}  interval={false}>
            <div className='slide'>
                <img src='https://tvline.com/wp-content/uploads/2021/10/AEWCMPunk.jpg?w=620'/>
                <p> Cmpunk In AEWCMPunk
                </p>
            </div>
            <div className='slide'>
                <img src='https://cdn.wrestletalk.com/wp-content/uploads/2022/02/cm-punk-september-17-b.jpg'/>
                <p> Cmpunk wwe
                </p>
            </div>
            <div className='slide'>
                <img src='https://footwearnews.com/wp-content/uploads/2022/04/MEGA794008_006-1.jpg?w=700&h=437&crop=1'/>
                <p> Britney Spears
                </p>
            </div>
            <div className='slide'>
                <img src='https://phantom-marca.unidadeditorial.es/1c7c5b41dbd7689d6d4eb7e6ae2773b2/resize/1320/f/jpg/assets/multimedia/imagenes/2023/03/26/16797866525023.jpg'/>
                <p> Cmpunk In AEWCMPunk
                </p>
            </div>
            
        </Carousel>
            
        
    );
}

export default Slider;